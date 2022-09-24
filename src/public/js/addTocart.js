let innerBCart = (book) => {
	return `<tr>
				<td class="titleB">${book.NameB}</td>
				<td><img class="imgCart" src="${book.ImgB}" alt=""></td>
				<td>x1</td>
				<td><i data-idBcart='${book.IDb}' class='bx bx-x js_del'></i></td>
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
			return books;
		})
		.then((books) => {
			let iconDeletes = document.querySelectorAll(".js_del");
			let newCartt = carts;
			iconDeletes.forEach((iconDel) => {
				iconDel.addEventListener("click", () => {
					const trNode = iconDel.parentElement.parentElement;
					trNode.setAttribute("hidden", " ");
					const iddel = iconDel.dataset.idbcart;
					delete newCartt[carts.indexOf(iddel)];
					const cartVjp = newCartt.filter((ele) => ele);
					localStorage.setItem("addCart", JSON.stringify(cartVjp));
					innerNum.innerHTML = `${cartVjp.length}`;
				});
			});
		});
}

const nextCart = document.querySelector(".js_nextBuy");
nextCart.addEventListener("click", () => {
	if (localStorage.getItem("IDuser")) {
		const ca = JSON.parse(localStorage.getItem("addCart"));
		if (ca.length != 0) {
			window.location = "/voucher";
			const dateCreate = new Date();
			const Month = dateCreate.getMonth() + 1;
			let dateString = "";
			if (dateCreate.getDate() < 10) {
				if (Month < 10) {
					dateString =
						"0" +
						dateCreate.getDate() +
						"/0" +
						Month +
						"/" +
						dateCreate.getFullYear();
				} else {
					dateString =
						"0" +
						dateCreate.getDate() +
						"/" +
						Month +
						"/" +
						dateCreate.getFullYear();
				}
			} else {
				if (Month < 10) {
					dateString =
						dateCreate.getDate() +
						"/0" +
						Month +
						"/" +
						dateCreate.getFullYear();
				} else {
					dateString =
						dateCreate.getDate() + "/" + Month + "/" + dateCreate.getFullYear();
				}
			}
			localStorage.setItem("dateCreate", dateString);
		} else {
			window.alert("error: must have at least one product");
		}
	} else {
		window.alert("please log in !");
	}
});
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
