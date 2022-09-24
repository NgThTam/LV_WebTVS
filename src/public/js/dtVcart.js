const renderVou = (user, numCar, dateC) => `<div class="cntV">
                                            <span><i class='bx bxs-user'></i> Full name of book tenant :</span>
                                            <div class="cntText">${user.FullName}</div>
                                            </div>
                                            <div class="cntV">
                                            <span><i class='bx bxs-map-pin' ></i> The address of the book renter :</span>
                                            <div class="cntText">${user.Addr}</div>
                                            </div>
                                            <div class="cntV">
                                            <span><i class='bx bx-mail-send'></i> Contact email :</span>
                                            <div class="cntText">${user.Email}</div>
                                            </div>
                                            <div class="cntV">
                                            <span><i class='bx bxs-book-add'></i> Number of books to rent :</span>
                                            <div class="cntText">${numCar}</div>
                                            </div>
                                            <div class="cntV">
                                            <span><i class='bx bx-calendar-check'></i> Book rental date :</span>
                                            <div class="cntText">${dateC}</div>
                                            </div>
                                            <form action="/reate-new-oder" method="POST" class = "js_subV">
                                                <div class="cntV">
                                                    <span><i class='bx bxs-calendar-edit'></i> Date of payment :</span>
                                                    <input type="date">
                                                    <input hidden name="IDo">
                                                    <input hidden name="IDu">
                                                    <input hidden name="Cart">
                                                    <input hidden name="DateRental">
                                                    <input hidden name="DatePay">
                                                </div>
                                                <div class="subVcart">
                                                    <button type="submit">OK</button>
                                                </div>
                            </form>`;
const renderIB = (book) => `<div class="imageLB">
								<img src="${book.ImgB}" alt="${book.NameB}">
							</div>`;
fetch("http://localhost:3000/api/v1/users")
	.then((respone) => respone.json())
	.then((users) => {
		const idu = localStorage.getItem("IDuser");
		const user = users.find((us) => us.IDu == idu);
		const cart = JSON.parse(localStorage.getItem("addCart"));
		const dateBuy = localStorage.getItem("dateCreate");
		const innerVou = document.querySelector(".js_renderV");
		innerVou.innerHTML = renderVou(user, cart.length, dateBuy);

		const formVou = document.querySelector(".js_subV");
		const dateCreatee = new Date();
		formVou.addEventListener("submit", (e) => {
			const getM = dateCreatee.getMonth() + 1;
			const dateP = formVou[0].value;
			// console.log(reverseDate(dateP).slice(0, 2));
			if (!dateP) {
				window.alert("NOoooooo");
				e.preventDefault();
			} else {
				if (
					parseInt(reverseDate(dateP).slice(6, 10)) >= dateCreatee.getFullYear()
				) {
					if (
						parseInt(reverseDate(dateP).slice(6, 10)) ==
						dateCreatee.getFullYear()
					) {
						if (parseInt(reverseDate(dateP).slice(3, 5)) >= getM) {
							if (parseInt(reverseDate(dateP).slice(3, 5)) == getM) {
								if (
									parseInt(reverseDate(dateP).slice(0, 2)) >=
									dateCreatee.getDate()
								) {
									alert("successful rental registration!!");
								} else {
									window.alert("date no!");
									e.preventDefault();
								}
							}
						} else {
							window.alert("date no!");
							e.preventDefault();
						}
					}
				} else {
					window.alert("date no!");
					e.preventDefault();
				}
			}

			formVou[1].value = random(8);
			formVou[2].value = idu;
			formVou[3].value = cart.join(",");
			formVou[4].value = dateBuy;
			formVou[5].value = reverseDate(dateP);

			delete localStorage.addCart;
		});
	});

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
const reverseDate = (string) => {
	return string.split("-").reverse().join("/");
};

fetch("http://localhost:3000/api/v1/books")
	.then((res) => res.json())
	.then((books) => {
		const innerLB = document.querySelector(".js_listC");
		const cart = JSON.parse(localStorage.getItem("addCart"));
		const arrIner = cart.map((ca) => {
			const book = books.find((book) => book.IDb == ca);
			return renderIB(book);
		});
		innerLB.innerHTML = arrIner.join("");
	});
