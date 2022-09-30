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
				<td><i class='bx bxs-edit'></i></td>
				<td><i class='bx bx-x'></i></td>
			</tr>`;
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
		innerRenB.innerHTML = books.map((book) => renderBook(book)).join(" ");
	});

const formAddB = document.querySelector(".js_formAddBook");
formAddB.addEventListener("submit", (e) => {
	// e.preventDefault();
	// for (let i = 0; i <= 6; i++) {
	// 	console.log(formAddB[i].value);
	// }
	console.log(typeof formAddB[5].value);
});
