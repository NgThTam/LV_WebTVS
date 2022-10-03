const render1 = (user) => {
	return `<tr>
                <td>${user.IDu}</td>
                <td>${user.Addr}</td>
                <td>${user.Old}</td>
            </tr>`;
};
const renderBook = (book) => {
	return `<tr class="tableBadmin">
				<td><img src="${book.ImgB}" alt=""></td>
				<td style="text-align:left;">${book.NameB}</td>
				<td>${book.Author}</td>
				<td>${book.YearPub}</td>
				<td>${book.Publiser}</td>
				<td><i class='bx bxs-edit js_iconedit' data-idbedit="${book.IDb}"></i></td>
				<td><i class='bx bx-x js_icondelete' data-iddelete="${book.IDb}"></i>
					<form action="/delete-book" hidden method="POST">
						<input type="text" name="idB" value="${book.IDb}">
						<button type="submit" id="${book.IDb}"></button>
					</form>
				</td>
			</tr>`;
};
const random = (length) => {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};
const renderFormEdit = (book) => {
	return `<div class="imageEdit"><img src="${book.ImgB}" alt=""></div>
				<div class="contentEdit">
					<input type="text" name="idB" hidden value="${book.IDb}">
					<div class="eledit">
						<p>Title :</p>
						<input type="text" name="title" value="${book.NameB}">
					</div>
					<div class="eledit">
						<p>Author :</p>
						<input type="text" name="author" value="${book.Author}">
					</div>
					<div class="eledit">
						<p>Publishing year :</p>
						<input type="number" name="yearpub" value="${book.YearPub}">
					</div>
					<div class="eledit">
						<p>Publisher :</p>
						<input type="text" name="publisher" value="${book.Publiser}">
					</div>
					<input type="text" name="imageB" hidden value="${book.ImgB}">
					<div class="butSubmitEdit">
						<button type="submit">Save</button>
					</div>
				</div>`;
};

fetch("http://localhost:3000/api/v1/users")
	.then((res) => res.json())
	.then((users) => {
		const newUers = users.map((user) => {
			return render1(user);
		});
		const scr1 = document.querySelector("#scr1 table > tbody");
		scr1.innerHTML = newUers.join(" ");
		const detailViews = document.querySelectorAll(".js_view > a");
		detailViews.forEach((detailView) => {
			detailView.addEventListener("click", () => {
				localStorage.setItem("id_book", detailView.id);
			});
		});
	});
const innerRenB = document.querySelector(".js_renderB");
fetch("http://localhost:3000/api/v1/books")
	.then((response) => response.json())
	.then((books) => {
		const newbooks = [];
		books.forEach((book) => {
			newbooks.unshift(book);
		});
		innerRenB.innerHTML = newbooks.map((book) => renderBook(book)).join(" ");
		const inputSearch = document.querySelector(".js_iptSearch");
		inputSearch.addEventListener("keyup", () => {
			let Textvalue = inputSearch.value.toUpperCase();
			const re = new RegExp(`${Textvalue}`);
			const reNum = new RegExp(`^${Textvalue}`);
			const newBSch = [];
			books.forEach((book) => {
				let textname = book.NameB.toUpperCase();
				let yearB = book.YearPub;
				if (re.test(textname) || reNum.test(yearB)) {
					newBSch.push(book);
				}
			});
			innerRenB.innerHTML = newBSch.map((book) => renderBook(book)).join(" ");
			const listedit = document.querySelectorAll(".js_iconedit");
			const bodyformEdit = document.querySelector(".js_bodyformedit");
			const funedit = document.querySelector(".js_showedit");
			listedit.forEach((edit) => {
				edit.addEventListener("click", () => {
					const bookedit = books.find(
						(book) => book.IDb == edit.dataset.idbedit
					);
					bodyformEdit.innerHTML = renderFormEdit(bookedit);
					funedit.setAttribute("style", "display: flex;");
				});
			});
			const listdelete = document.querySelectorAll(".js_icondelete");
			listdelete.forEach((icondele) => {
				icondele.addEventListener("click", () => {
					document.getElementById(icondele.dataset.iddelete).click();
				});
			});
		});
		return books;
	})
	.then((books) => {
		const listedit = document.querySelectorAll(".js_iconedit");
		const bodyformEdit = document.querySelector(".js_bodyformedit");
		const funedit = document.querySelector(".js_showedit");
		listedit.forEach((edit) => {
			edit.addEventListener("click", () => {
				const bookedit = books.find((book) => book.IDb == edit.dataset.idbedit);
				bodyformEdit.innerHTML = renderFormEdit(bookedit);
				funedit.setAttribute("style", "display: flex;");
			});
		});
		const listdelete = document.querySelectorAll(".js_icondelete");
		listdelete.forEach((icondele) => {
			icondele.addEventListener("click", () => {
				document.getElementById(icondele.dataset.iddelete).click();
			});
		});
		return books;
	})
	.then((books) => {
		const YearPubs = [];
		books.forEach((book) => {
			YearPubs.push(book.YearPub);
		});
		const valueYearPub = [];
		const newYearPubs = [...new Set(YearPubs)].sort();
		newYearPubs.forEach((year) => {
			let i = 0;
			YearPubs.forEach((yep) => {
				if (yep == year) {
					i++;
				}
			});
			valueYearPub.push(i);
		});
		Highcharts.chart("HighChartPubYear", {
			chart: {
				type: "column",
				zoomType: "y",
			},
			title: {
				text: "Number of books available at the bookstore",
			},
			subtitle: {
				text: "Statistics by year of publication",
			},
			xAxis: {
				categories: newYearPubs,
				title: {
					text: null,
				},
				accessibility: {
					description: "Countries",
				},
			},
			yAxis: {
				min: 0,
				tickInterval: 2,
				title: {
					text: "The number of books the bookstore has",
				},
				labels: {
					overflow: "justify",
					format: "{value}",
				},
			},
			plotOptions: {
				column: {
					dataLabels: {
						enabled: true,
						format: "{y} books",
					},
				},
			},
			tooltip: {
				valueSuffix: " books",
				stickOnContact: true,
				backgroundColor: "rgba(255, 255, 255, 0.93)",
			},
			legend: {
				enabled: false,
			},
			series: [
				{
					name: "This bookstore has",
					data: valueYearPub,
					borderColor: "#5997DE",
				},
			],
		});
	});

const formAddB = document.querySelector(".js_formAddBook");
formAddB.addEventListener("submit", (e) => {
	// e.preventDefault();
	// for (let i = 0; i <= 6; i++) {
	// 	console.log(formAddB[i].value);
	// }
	formAddB[7].value = random(8);
	if (!formAddB[4].value && !formAddB[5].value) {
		window.alert("image empty");
		e.preventDefault();
	} else {
		if (formAddB[4].value && formAddB[5].value) {
			window.alert("image (2)");
			e.preventDefault();
		} else {
			if (!formAddB[4].value) {
				formAddB[6].value = formAddB[5].value;
			} else {
				formAddB[6].value = formAddB[4].value;
			}
		}
	}
});

const funaddbook = document.querySelector(".js_showAddbook");
const inAddbook = document.querySelector(".js_showAB");
funaddbook.addEventListener("click", () => {
	inAddbook.classList.toggle("disflex");
	funaddbook.classList.toggle("boderFun");
});
const funedit = document.querySelector(".js_showedit");
const closeEdit = document.querySelector(".js_closeE");
closeEdit.addEventListener("click", () => {
	funedit.setAttribute("style", "display: none;");
});
