let renderB = (book) => {
	return `<div class="detail_img">
                <img src="${book.ImgB}" alt="">
            </div>
            <div class="detail_info">
                <div class="title_info">
                    <h1 class="detail_titleBook">${book.NameB}</h1>
                </div>
                <div class="detail_rating">
                    <ul class="js_detail_star detail_list_star">
                        <li><i class='bx bxs-star star_full'></i></li>
                        <li><i class='bx bxs-star star_full'></i></li>
                        <li><i class='bx bxs-star star_full'></i></li>
                        <li><i class='bx bxs-star star_full'></i></li>
                        <li><i class='bx bx-star star_fill' ></i></li>
                    </ul>
                </div>
                <div class="content_info">
                    <div class="detail_aut_book" style="color: #897c7c;">By: <span>${book.Author}</span></div>
                    <div class="detail_aut_book" style="color: #897c7c;">Year-Of-Publication: <span>${book.YearPub}</span></div>
                    <div class="detail_aut_book" style="color: #897c7c;">Publisher: <span>${book.Publiser}</span></div>
                    <div class="detail_share">
                        <h1 class="detail_titleBook">Share</h1>
                        <div class="list_share">
                            <i class='bx bxl-facebook-circle fb'></i>
                            <i class='bx bxl-messenger mes'></i>
                            <i class='bx bxl-twitter tw'></i>
                            <i class='bx bx-link-alt lin' ></i>
                        </div>
                    </div>
					<div class="addTocart">
                    <div class="addcart js_addcard" data-id= "${book.IDb}">
                        <p>Add To Cart</p>
                    </div>
                </div> 
                </div>             
            </div>`;
};

const innerBookCart = (book) => {
	return `<tr>
				<td class="titleB">${book.NameB}</td>
				<td><img class="imgCart" src="${book.ImgB}" alt=""></td>
				<td>x1</td>
				<td><i data-idBcart='${book.IDb}' class='bx bx-x js_del'></i></td>
			</tr>`;
};

const renderTKStar = (valueSt, oblength) => `<div class="tk5s">
													<div class="iconS">
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
													</div>
													<div class="startk">
														<div class="tkback"></div>
														<div class="tkst" style="width: ${valueSt.vl5}%;"></div>
														<div class="slstar">${oblength.ol5}</div>
													</div>
													</div>
													<div class="tk4s">
													<div class="iconS">
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
														<i class='bx bx-star' ></i>
													</div>
													<div class="startk">
														<div class="tkback"></div>
														<div class="tkst" style="width: ${valueSt.vl4}%;"></div>
														<div class="slstar">${oblength.ol4}</div>
													</div>
													</div>
													<div class="tk3s">
													<div class="iconS">
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
														<i class='bx bx-star' ></i>
														<i class='bx bx-star' ></i>
													</div>
													<div class="startk">
														<div class="tkback"></div>
														<div class="tkst" style="width: ${valueSt.vl3}%;"></div>
														<div class="slstar">${oblength.ol3}</div>
													</div>
													</div>
													<div class="tk2s">
													<div class="iconS">
														<i class='bx bxs-star' ></i>
														<i class='bx bxs-star' ></i>
														<i class='bx bx-star' ></i>
														<i class='bx bx-star' ></i>
														<i class='bx bx-star' ></i>
													</div>
													<div class="startk">
														<div class="tkback"></div>
														<div class="tkst" style="width: ${valueSt.vl2}%;"></div>
														<div class="slstar">${oblength.ol2}</div>
													</div>
													</div>
													<div class="tk1s">
													<div class="iconS">
														<i class='bx bxs-star' ></i>
														<i class='bx bx-star' ></i>
														<i class='bx bx-star' ></i>
														<i class='bx bx-star' ></i>
														<i class='bx bx-star' ></i>
													</div>
													<div class="startk">
														<div class="tkback"></div>
														<div class="tkst" style="width: ${valueSt.vl1}%;"></div>
														<div class="slstar">${oblength.ol1}</div>
													</div>
													</div>`;

fetch("http://localhost:3000/api/v1/books")
	.then((Response) => Response.json())
	.then((books) => {
		const detailbook = books.map((book) => {
			if (book.IDb === localStorage.getItem("id_book")) {
				return renderB(book);
			}
		});
		const divdetail = document.getElementById("js_detail");
		detailbook.forEach((abook) => {
			if (abook != undefined) {
				divdetail.innerHTML = abook;
			}
		});
		return books;
	})
	.then((books) => {
		const eacart = document.querySelector(".js_addcard");
		// let arr = [];
		// let arr = JSON.parse(localStorage.getItem("addCart");

		// let arr = JSON.parse(localStorage.getItem("addCart")) || [];
		let arrs = localStorage.getItem("addCart");
		if (arrs != null) {
			var arr = JSON.parse(localStorage.getItem("addCart"));
		} else {
			var arr = [];
		}
		// console.log(arr);
		const elnum = document.querySelector(".js_num");
		// console.log(elnum);
		eacart.addEventListener("click", () => {
			arr.push(eacart.dataset.id);
			arr = arr.filter(onlyUnique); //loc gtri trung
			localStorage.setItem("addCart", JSON.stringify(arr));
			// console.log(JSON.parse(localStorage.getItem("addCart")));
			const Cart = JSON.parse(localStorage.getItem("addCart"));
			let numelCart = Cart.length;
			elnum.innerHTML = `${numelCart}`;
			const newBookCart = [];
			const newBcart = [];
			Cart.forEach((cartt) => {
				books.forEach((book) => {
					if (book.IDb == cartt) {
						newBookCart.push(innerBookCart(book));
						newBcart.push(book.IDb);
					}
				});
			});
			const bodyCart = document.querySelector(".js_bodyCart");
			bodyCart.innerHTML = newBookCart.join(" ");
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
	});

fetch("http://localhost:3000/api/v1/ratings")
	.then((response) => response.json())
	.then((ratings) => {
		const detailbook = ratings.filter(
			(rating) => rating.IDb === localStorage.getItem("id_book")
		);
		// console.log(detailbook);
		let Star = mean(detailbook);
		// console.log(Star);

		const showStar = document.querySelector(".js_detail_star");

		if (Star <= 2) {
			showStar.innerHTML = `<li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>`;
		} else if (Star <= 4) {
			showStar.innerHTML = `<li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>`;
		} else if (Star <= 6) {
			showStar.innerHTML = `<li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>`;
		} else if (Star <= 8) {
			showStar.innerHTML = `<li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bx-star star_fill' ></i></li>`;
		} else {
			showStar.innerHTML = `<li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>
		                        <li><i class='bx bxs-star star_full'></i></li>`;
		}
		return ratings;
	})
	.then((ratings) => {
		const idB = localStorage.getItem("id_book");
		const ratingsBook = ratings.filter((rating) => rating.IDb == idB);
		const sumarr = sum(ratingsBook);
		const arr1 = ratingsBook.filter((rating) => rating.Star == 2);
		const arr2 = ratingsBook.filter((rating) => rating.Star == 4);
		const arr3 = ratingsBook.filter((rating) => rating.Star == 6);
		const arr4 = ratingsBook.filter((rating) => rating.Star == 8);
		const arr5 = ratingsBook.filter((rating) => rating.Star == 10);
		const obTkStar = {
			vl1: (sum(arr1) * 100) / sumarr,
			vl2: (sum(arr2) * 100) / sumarr,
			vl3: (sum(arr3) * 100) / sumarr,
			vl4: (sum(arr4) * 100) / sumarr,
			vl5: (sum(arr5) * 100) / sumarr,
		};
		const oblength = {
			ol1: arr1.length,
			ol2: arr2.length,
			ol3: arr3.length,
			ol4: arr4.length,
			ol5: arr5.length,
		};
		const innerTKStar = document.querySelector(".js_tkStar");
		innerTKStar.innerHTML = renderTKStar(obTkStar, oblength);
	});

const mean = (arr) => {
	let smean = 0;
	const length = arr.length;
	arr.forEach((value) => {
		smean += value.Star;
	});
	return smean / length;
};
const sum = (arr) => {
	let smean = 0;
	arr.forEach((value) => {
		smean++;
	});
	return smean;
};

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

// comment
const formCmt = document.querySelector(".js_formcmt");
// const butComment = document.getElementById("butsubcomment");
// console.log(butComment)
formCmt.addEventListener("submit", () => {
	if (localStorage.getItem("IDuser")) {
		const timeCmt = new Date();
		// console.log(localStorage.getItem("IDuser"));
		// console.log(localStorage.getItem("id_book"));
		formCmt[1].value = localStorage.getItem("id_book");
		formCmt[2].value = localStorage.getItem("IDuser");
		let Strtime1 = "";
		let htime = timeCmt.getHours() - 12;
		let gmonthday = timeCmt.getMonth() + 1;
		if (gmonthday < 10) {
			if (timeCmt.getHours() >= 12) {
				Strtime1 =
					timeCmt.getDate() +
					"/0" +
					gmonthday +
					" + " +
					htime +
					":" +
					timeCmt.getMinutes() +
					" PM";
			} else {
				Strtime1 =
					timeCmt.getDate() +
					"/0" +
					gmonthday +
					" + " +
					timeCmt.getHours() +
					":" +
					timeCmt.getMinutes() +
					" AM";
			}
		} else {
			if (timeCmt.getHours() >= 12) {
				Strtime1 =
					timeCmt.getDate() +
					"/" +
					gmonthday +
					" + " +
					htime +
					":" +
					timeCmt.getMinutes() +
					" PM";
			} else {
				Strtime1 =
					timeCmt.getDate() +
					"/" +
					gmonthday +
					" + " +
					timeCmt.getHours() +
					":" +
					timeCmt.getMinutes() +
					" AM";
			}
		}
		// console.log(Strtime1);
		formCmt[3].value = Strtime1;
		// console.log(timeCmt.getDate() + "/" + timeCmt.getMonth());
		// console.log(timeCmt.getHours() + ":" + timeCmt.getMinutes());
	} else {
		window.alert("pls login");
		event.preventDefault();
	}

	// event.preventDefault();
});
const innerCmt = (user, cmt) => `<div class="cmt">
	<div class="imgCmt">
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0wR21lrB1tZAW3ihK1Zy3CXpXy4PazEU1w&usqp=CAU" alt="">
	</div>
	<div class="nameCmt">
		<div class="name">${user.FullName} <div class="date">${cmt.TimeCmt}</div></div>
		<p>${cmt.Comment}</p>
		<div class="cmtLike">
			<p class="like colorlikeblu"><i class='bx bx-like'></i> like</p>
			<p class="rep colorlikeblu js_showreplys" data-idformrepnew="idcmtrep-${cmt.IDcomment}">reply <i class='bx bx-reply'></i></p>
		</div>
		<div class="replycmt">
        	<div class="asdcontentrepnewcmt js_show_new_idcmtrep-${cmt.IDcomment}">
                                
            </div>
            <div class="cacrepcmts js_allcacreps js_idcmtrep-${cmt.IDcomment}">
                <div class="imgCmt">
                	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0wR21lrB1tZAW3ihK1Zy3CXpXy4PazEU1w&usqp=CAU" alt="">
                </div>
                <div class="inpreplycmt">
                    <form class="js_formrepcmtnews" data-idformrepnewff="idcmtrep-${cmt.IDcomment}">
                        <input type="text" placeholder="leave a review comment here">
                        <button type="submit" hidden></button>
                    </form>
                </div>
        	</div>
         </div>
	</div>

	</div>`;
const innerRepcmt = (ten, ngay, nd) => {
	return `<div class="cacrepcmts cacrepcmtssds">
				<div class="imgCmt">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0wR21lrB1tZAW3ihK1Zy3CXpXy4PazEU1w&usqp=CAU" alt="">
				</div>
				<div class="contentrepcmt">
					<div class="name">${ten} <div class="date">${ngay}</div></div>
					<p>${nd}</p>
				</div>
			</div>`;
};
const divCmts = document.querySelector(".js_cmts");
fetch("http://localhost:3000/api/v1/users")
	.then((response) => response.json())
	.then((users) => {
		fetch("http://localhost:3000/api/v1/comments")
			.then((res) => res.json())
			.then((comments) => {
				const newListComment = [];
				let listComment = comments.filter(
					(cmt) => cmt.IDb == localStorage.getItem("id_book")
				);
				listComment.forEach((comment) => {
					const userComment = users.find((user) => user.IDu == comment.IDu);
					newListComment.unshift(innerCmt(userComment, comment));
				});
				divCmts.innerHTML = newListComment.join(" ");
				return comments;
			})
			.then((comments) => {
				const alllikecmt = document.querySelectorAll(".cmts .cmt .like");
				alllikecmt.forEach((onelike) => {
					onelike.addEventListener("click", () => {
						onelike.classList.toggle("colorlike");
					});
				});
				const iconshowreps = document.querySelectorAll(".js_showreplys");
				const allcacreps = document.querySelectorAll(".js_allcacreps");
				iconshowreps.forEach((icrep) => {
					icrep.addEventListener("click", () => {
						allcacreps.forEach((loserep) => {
							loserep.classList.remove("cacdisfle");
						});
						const formnewrepoke = document.querySelector(
							`.js_${icrep.dataset.idformrepnew}`
						);
						formnewrepoke.classList.add("cacdisfle");
					});
				});

				const formrepcmtnews = document.querySelectorAll(".js_formrepcmtnews");
				formrepcmtnews.forEach((formrepnew) => {
					let arrroke = [];
					formrepnew.addEventListener("submit", (e) => {
						let ndcmt = formrepnew[0].value;
						let Strtime1 = "";
						let idus = localStorage.getItem("IDuser");
						if (localStorage.getItem("IDuser")) {
							const timeCmt = new Date();

							let htime = timeCmt.getHours() - 12;
							let monthday = timeCmt.getMonth() + 1;
							if (monthday < 10) {
								if (timeCmt.getHours() >= 12) {
									Strtime1 =
										timeCmt.getDate() +
										"/0" +
										monthday +
										" + " +
										htime +
										":" +
										timeCmt.getMinutes() +
										" PM";
								} else {
									Strtime1 =
										timeCmt.getDate() +
										"/0" +
										monthday +
										" + " +
										timeCmt.getHours() +
										":" +
										timeCmt.getMinutes() +
										" AM";
								}
							} else {
								if (timeCmt.getHours() >= 12) {
									Strtime1 =
										timeCmt.getDate() +
										"/" +
										monthday +
										" + " +
										htime +
										":" +
										timeCmt.getMinutes() +
										" PM";
								} else {
									Strtime1 =
										timeCmt.getDate() +
										"/" +
										monthday +
										" + " +
										timeCmt.getHours() +
										":" +
										timeCmt.getMinutes() +
										" AM";
								}
							}

							// console.log(Strtime1);
						} else {
							window.alert("pls login");
							event.preventDefault();
						}
						const useroke = users.find((user) => user.IDu == idus);
						if (ndcmt != "" && idus) {
							arrroke.push(
								innerRepcmt(useroke.FullName, Strtime1, formrepnew[0].value)
							);
						}

						let shownewrepcmt = document.querySelector(
							`.js_show_new_${formrepnew.dataset.idformrepnewff}`
						);
						shownewrepcmt.innerHTML = arrroke.join(" ");
						formrepnew[0].value = "";
						e.preventDefault();
					});
				});
			});
	});

// danh gia sao
fetch("http://localhost:3000/api/v1/ratings")
	.then((res) => res.json())
	.then((ratings) => {
		// console.log(ratings);
		const ckeckuser = localStorage.getItem("IDuser");
		const ckeckbook = localStorage.getItem("id_book");
		const innerckStar = document.querySelector(".js_ckeckstarfinal");
		const arrStar = [
			`<li class="sta1" style="cursor: default;"><i class='bx bxs-star star_full'></i></li>`,
			`<li class="sta1 " style="cursor: default;"><i class='bx bxs-star star_full'></i></li>`,
			`<li class="sta1 " style="cursor: default;"><i class='bx bxs-star star_full'></i></li>`,
			`<li class="sta1 " style="cursor: default;"><i class='bx bxs-star star_full'></i></li>`,
			`<li class="sta1 " style="cursor: default;"><i class='bx bxs-star star_full'></i></li>`,
			`<li class="sta1 " style="cursor: default;"><i class='bx bxs-star'></i></li>`,
			`<li class="sta1 " style="cursor: default;"><i class='bx bxs-star'></i></li>`,
			`<li class="sta1 " style="cursor: default;"><i class='bx bxs-star'></i></li>`,
			`<li class="sta1 " style="cursor: default;"><i class='bx bxs-star'></i></li>`,
			`<li class="sta1 " style="cursor: default;"><i class='bx bxs-star'></i></li>`,
		];
		if (ckeckuser) {
			if (ckeckuser == "9999" || ckeckuser == "admin") {
				console.log("admin");
			} else {
				const ratingB = ratings.find(
					(rating) => rating.IDu == ckeckuser && rating.IDb == ckeckbook
				);
				if (ratingB) {
					let innerStardareting;
					switch (ratingB.Star) {
						case 2:
							innerStardareting = arrStar.slice(4, 9);
							break;
						case 4:
							innerStardareting = arrStar.slice(3, 8);
							break;
						case 6:
							innerStardareting = arrStar.slice(2, 7);
							break;
						case 8:
							innerStardareting = arrStar.slice(1, 6);
							break;
						case 10:
							innerStardareting = arrStar.slice(0, 5);
							break;
					}
					innerckStar.innerHTML = innerStardareting.join(" ");
				}
			}
		}
	});
