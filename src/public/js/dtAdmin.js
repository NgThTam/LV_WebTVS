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
				<td><i class='bx bx-x js_icondelete' data-iddelete="${book.IDb}"></i></td>
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
			const newBSch = [];
			books.forEach((book) => {
				let textname = book.NameB.toUpperCase();
				if (re.test(textname)) {
					newBSch.push(book);
				}
			});
			innerRenB.innerHTML = newBSch.map((book) => renderBook(book)).join(" ");
		});
		return books;
	})
	.then((books) => {
		const listedit = document.querySelectorAll(".js_iconedit");
		listedit.forEach((edit) => {
			edit.addEventListener("click", () => {
				console.log(edit.dataset.idbedit);
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
	} else {
		if (formAddB[4].value && formAddB[5].value) {
			window.alert("image (2)");
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
