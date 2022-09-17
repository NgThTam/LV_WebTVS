let innerBCart = (book) => {
	return `<tr>
				<td class="titleB">${book.NameB}</td>
				<td><img class="imgCart" src="${book.ImgB}" alt=""></td>
				<td>x1</td>
				<td><i data-idBcart='${book.IDb}' class='bx bx-x'></i></td>
			</tr>`;
};
const reCart = document.querySelector(".remov");
reCart.addEventListener("click", () => {
	delete localStorage.addCart;
	window.location = "/";
});
let carts = JSON.parse(localStorage.getItem("addCart"));
const innerNum = document.querySelector(".js_num");
if (!carts) {
	innerNum.innerHTML = "0";
} else {
	innerNum.innerHTML = `${carts.length}`;
	fetch("http://localhost:3000/api/v1/books")
		.then((response) => response.json())
		.then((books) => {
			// console.log(books);
			const newBookCart = [];
			carts.forEach((cart) => {
				books.forEach((book) => {
					if (book.IDb == cart) {
						newBookCart.push(innerBCart(book));
					}
				});
			});
			const bodyCart = document.querySelector(".js_bodyCart");
			bodyCart.innerHTML = newBookCart.join(" ");
			// console.log(newBookCart);
		});
}

// fetch("http://localhost:3000/api/v1/books")
// 	.then((response) => response.json())
// 	.then((books) => {
// 		// console.log(books);
// 		const newBookCart = [];
// 		carts.forEach((cart) => {
// 			books.forEach((book) => {
// 				if (book.IDb == cart) {
// 					// newBookCart.push(innerBookCart(book));
// 				}
// 			});
// 		});
// 		const bodyCart = document.querySelector(".js_bodyCart");
// 		bodyCart.innerHTML = newBookCart.join(" ");
// 		// console.log(newBookCart);
// 	});
