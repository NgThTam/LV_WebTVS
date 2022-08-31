const render1 = (user) => {
	return `<tr>
                <td>${user.IDu}</td>
                <td>${user.Addr}</td>
                <td>${user.Old}</td>
            </tr>`;
};

const render2 = (book) => {
	return `<tr>
                <td>${book.IDb}</td>
                <td>${book.NameB}</td>
                <td>${book.Author}</td>
                <td>${book.Publiser}</td>
                <td>${book.YearPub}</td>
				<td style="text-align: center;" class="view js_view">
					<a id="${book.IDb}" href="./detail"><i class='bx bx-show'></i></a>
				</td>
            </tr>`;
};
const render3 = (book) => {
	return `<tr>
                <td>${book.IDu}</td>
                <td>${book.IDb}</td>
                <td>${book.name}</td>
                <td>${book.Star}</td>
            </tr>`;
};

fetch("http://localhost:3000/api/v1/books")
	.then((response) => response.json())
	.then((bks) => {
		const scr2 = document.querySelector("#scr2 table > tbody");
		const books = bks.map((book) => {
			return render2(book);
		});
		scr2.innerHTML = books.join(" ");
		return bks;
	})
	.then((bks) => {
		fetch("http://localhost:3000/api/v1/users")
			.then((res) => res.json())
			.then((users) => {
				const newUers = users.map((user) => {
					return render1(user);
				});
				const scr1 = document.querySelector("#scr1 table > tbody");
				scr1.innerHTML = newUers.join(" ");
				// const detailViews = document.querySelectorAll(".js_view > a");
				// detailViews.forEach((detailView) => {
				//     detailView.addEventListener("click", () => {
				//         localStorage.setItem("id_book", detailView.id);
				//     });
				// });
			});
		const detailViews = document.querySelectorAll(".js_view > a");
		detailViews.forEach((detailView) => {
			detailView.addEventListener("click", () => {
				localStorage.setItem("id_book", detailView.id);
			});
		});
	});
