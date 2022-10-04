fetch("http://localhost:3000/api/v1/users")
	.then((response) => response.json())
	.then((users) => {
		const nametk = document.querySelector(".js_nametk");
		const infU = document.querySelector(".js_inf_pro");
		const Iuser = users.find(
			(user) => user.IDu == localStorage.getItem("IDuser")
		);
		const acuser = Iuser.Email.slice(0, Iuser.Email.indexOf("@"));
		nametk.innerHTML = `@-${acuser}`;
		infU.innerHTML = innerInf(Iuser);
		// console.log(Iuser);
		// console.log(localStorage.getItem("IDuser"));
		const VOuser = document.querySelector(".js_viewVouUser");
		VOuser.innerHTML = innerVOuser(Iuser);
	})
	.then(() => {
		const inputInfs = document.querySelectorAll(".js_inputInf");
		const iconEdit = document.querySelector(".js_edit");
		const hidtexts = document.querySelectorAll(".js_hidtext");
		iconEdit.addEventListener("click", () => {
			inputInfs.forEach((inputInf) => {
				inputInf.classList.toggle("cssblock");
			});
			hidtexts.forEach((text) => {
				text.classList.toggle("cssnone");
			});
		});
		const formUpdate = document.querySelector(".js_formUd");
		formUpdate.addEventListener("submit", () => {
			alert("Successfully updated!!!");
		});
	});

fetch("http://localhost:3000/api/v1/books")
	.then((res) => res.json())
	.then((books) => {
		fetch("http://localhost:3000/api/v1/oders")
			.then((res) => res.json())
			.then((oders) => {
				const clickFun = document.querySelector(".js_clstatus");
				let Today = new Date();
				clickFun.addEventListener("click", () => {
					Today = new Date();
					// console.log(Today);
				});
				let Tomonth = Today.getMonth() + 1;
				const listOder = oders.filter(
					(oder) => oder.IDu == localStorage.getItem("IDuser")
				);
				const newlistOder = [];
				listOder.forEach((eloder) => {
					const lengthCart = eloder.Cart.split(",").length;
					eloder.lenghtCart = lengthCart;
					const dateP = eloder.DatePay;
					let hsdOder = "";
					if (parseInt(dateP.slice(6, 10)) >= Today.getFullYear()) {
						if (parseInt(dateP.slice(6, 10)) > Today.getFullYear()) {
							hsdOder = "expired";
						} else {
							if (parseInt(dateP.slice(3, 5)) >= Tomonth) {
								if (parseInt(dateP.slice(3, 5)) > Tomonth) {
									hsdOder = "unexpired";
								} else {
									if (parseInt(dateP.slice(0, 2)) >= Today.getDate()) {
										hsdOder = "unexpired";
									} else {
										hsdOder = "expired";
									}
								}
							} else {
								hsdOder = "expired";
							}
						}
					} else {
						hsdOder = "expired";
					}
					eloder.status = hsdOder;
					if (hsdOder == "unexpired") {
						if (eloder.PayStatus == 0) {
							newlistOder.push(innerRVunex(eloder));
						} else {
							newlistOder.push(innerRVunex1(eloder));
						}
					} else {
						if (eloder.PayStatus == 0) {
							newlistOder.push(innerRVex(eloder));
						} else {
							newlistOder.push(innerRVex1(eloder));
						}
					}
				});
				const cntOder = document.querySelector(".js_tableRV");
				cntOder.innerHTML = newlistOder.join(" ");
				return listOder;
			})
			.then((listOder) => {
				const funs = document.querySelectorAll(".js_fun");
				const srfuns = document.querySelectorAll(".js_srfun");
				funs.forEach((fun) => {
					fun.addEventListener("click", (e) => {
						// console.log(fun.children[0]);
						funs.forEach((fn) => {
							fn.classList.remove("boder_click");
							fn.children[0].classList.remove("text_color");
						});
						fun.classList.add("boder_click");
						fun.children[0].classList.add("text_color");
						srfuns.forEach((sr) => {
							sr.classList.remove("showSr");
						});
						const elsr = document.getElementById(fun.dataset.srid);
						elsr.classList.add("showSr");
					});
				});

				const iconfils = document.querySelectorAll(".js_filStatus");
				const newlistUn = [];
				const newlistEx = [];
				listOder.forEach((od) => {
					if (od.status == "unexpired") {
						newlistUn.push(od);
					} else {
						newlistEx.push(od);
					}
				});
				iconfils.forEach((icon) => {
					icon.addEventListener("click", () => {
						if (icon.innerText == "unexpired") {
							const cntUn = newlistUn.map((elUn) => {
								if (elUn.PayStatus == 0) {
									return innerRVunex(elUn);
								} else {
									return innerRVunex1(elUn);
								}
							});
							const cntOder = document.querySelector(".js_tableRV");
							cntOder.innerHTML = cntUn.join(" ");
							const viewOs = document.querySelectorAll(".js_viewO");
							const modalO = document.querySelector(".js_modalview");
							const cntO = document.querySelector(".js_cntO");
							viewOs.forEach((view) => {
								view.addEventListener("click", () => {
									modalO.classList.add("showM");
									let listNameBooks = [];
									const Ooder = listOder.find(
										(Odd) => Odd.IDo == view.dataset.idoder
									);
									const listIDb = Ooder.Cart.split(",");
									listIDb.forEach((IDbook) => {
										books.forEach((book) => {
											if (IDbook == book.IDb) {
												listNameBooks.push(book.NameB);
											}
										});
									});
									const detailView = document.querySelector(".js_detailView");
									detailView.innerHTML = innerDetailView(
										Ooder,
										listNameBooks.join(" <span>;</span> ")
									);
								});
							});
							modalO.addEventListener("click", () => {
								modalO.classList.remove("showM");
							});
							cntO.addEventListener("click", (e) => {
								e.stopPropagation();
							});
						} else {
							const cntEx = newlistEx.map((elEx) => {
								if (elEx.PayStatus == 0) {
									return innerRVex(elEx);
								} else {
									return innerRVex1(elEx);
								}
							});
							const cntOder = document.querySelector(".js_tableRV");
							cntOder.innerHTML = cntEx.join(" ");
							const viewOs = document.querySelectorAll(".js_viewO");
							const modalO = document.querySelector(".js_modalview");
							const cntO = document.querySelector(".js_cntO");
							viewOs.forEach((view) => {
								view.addEventListener("click", () => {
									modalO.classList.add("showM");
									let listNameBooks = [];
									const Ooder = listOder.find(
										(Odd) => Odd.IDo == view.dataset.idoder
									);
									const listIDb = Ooder.Cart.split(",");
									listIDb.forEach((IDbook) => {
										books.forEach((book) => {
											if (IDbook == book.IDb) {
												listNameBooks.push(book.NameB);
											}
										});
									});
									const detailView = document.querySelector(".js_detailView");
									detailView.innerHTML = innerDetailView(
										Ooder,
										listNameBooks.join(" <span>;</span> ")
									);
								});
							});
							modalO.addEventListener("click", () => {
								modalO.classList.remove("showM");
							});
							cntO.addEventListener("click", (e) => {
								e.stopPropagation();
							});
						}
					});
				});
				return listOder;
			})
			.then((listOder) => {
				const viewOs = document.querySelectorAll(".js_viewO");
				const modalO = document.querySelector(".js_modalview");
				const cntO = document.querySelector(".js_cntO");
				viewOs.forEach((view) => {
					view.addEventListener("click", () => {
						modalO.classList.add("showM");
						let listNameBooks = [];
						const Ooder = listOder.find(
							(Odd) => Odd.IDo == view.dataset.idoder
						);
						const listIDb = Ooder.Cart.split(",");
						listIDb.forEach((IDbook) => {
							books.forEach((book) => {
								if (IDbook == book.IDb) {
									listNameBooks.push(book.NameB);
								}
							});
						});
						const detailView = document.querySelector(".js_detailView");
						detailView.innerHTML = innerDetailView(
							Ooder,
							listNameBooks.join(" <span>;</span> ")
						);
					});
				});
				modalO.addEventListener("click", () => {
					modalO.classList.remove("showM");
				});
				cntO.addEventListener("click", (e) => {
					e.stopPropagation();
				});
			});
	});
// fetch("http://localhost:3000/api/v1/oders")
// 	.then((res) => res.json())
// 	.then((oders) => {
// 		const clickFun = document.querySelector(".js_clstatus");
// 		let Today = new Date();
// 		clickFun.addEventListener("click", () => {
// 			Today = new Date();
// 			// console.log(Today);
// 		});
// 		let Tomonth = Today.getMonth() + 1;
// 		const listOder = oders.filter(
// 			(oder) => oder.IDu == localStorage.getItem("IDuser")
// 		);
// 		const newlistOder = [];
// 		listOder.forEach((eloder) => {
// 			const lengthCart = eloder.Cart.split(",").length;
// 			eloder.lenghtCart = lengthCart;
// 			const dateP = eloder.DatePay;
// 			let hsdOder = "";
// 			if (parseInt(dateP.slice(6, 10)) >= Today.getFullYear()) {
// 				if (parseInt(dateP.slice(6, 10)) > Today.getFullYear()) {
// 					hsdOder = "expired";
// 				} else {
// 					if (parseInt(dateP.slice(3, 5)) >= Tomonth) {
// 						if (parseInt(dateP.slice(3, 5)) > Tomonth) {
// 							hsdOder = "expired";
// 						} else {
// 							if (parseInt(dateP.slice(0, 2)) >= Today.getDate()) {
// 								hsdOder = "unexpired";
// 							} else {
// 								hsdOder = "expired";
// 							}
// 						}
// 					} else {
// 						hsdOder = "expired";
// 					}
// 				}
// 			} else {
// 				hsdOder = "expired";
// 			}
// 			eloder.status = hsdOder;
// 			if (hsdOder == "unexpired") {
// 				newlistOder.push(innerRVunex(eloder));
// 			} else {
// 				newlistOder.push(innerRVex(eloder));
// 			}
// 		});
// 		const cntOder = document.querySelector(".js_tableRV");
// 		cntOder.innerHTML = newlistOder.join(" ");
// 		return listOder;
// 	})
// 	.then((listOder) => {
// 		const funs = document.querySelectorAll(".js_fun");
// 		const srfuns = document.querySelectorAll(".js_srfun");
// 		funs.forEach((fun) => {
// 			fun.addEventListener("click", (e) => {
// 				// console.log(fun.children[0]);
// 				funs.forEach((fn) => {
// 					fn.classList.remove("boder_click");
// 					fn.children[0].classList.remove("text_color");
// 				});
// 				fun.classList.add("boder_click");
// 				fun.children[0].classList.add("text_color");
// 				srfuns.forEach((sr) => {
// 					sr.classList.remove("showSr");
// 				});
// 				const elsr = document.getElementById(fun.dataset.srid);
// 				elsr.classList.add("showSr");
// 			});
// 		});

// 		const iconfils = document.querySelectorAll(".js_filStatus");
// 		const newlistUn = [];
// 		const newlistEx = [];
// 		listOder.forEach((od) => {
// 			if (od.status == "unexpired") {
// 				newlistUn.push(od);
// 			} else {
// 				newlistEx.push(od);
// 			}
// 		});
// 		iconfils.forEach((icon) => {
// 			icon.addEventListener("click", () => {
// 				if (icon.innerText == "unexpired") {
// 					const cntUn = newlistUn.map((elUn) => innerRVunex(elUn));
// 					const cntOder = document.querySelector(".js_tableRV");
// 					cntOder.innerHTML = cntUn.join(" ");
// 					const viewOs = document.querySelectorAll(".js_viewO");
// 					const modalO = document.querySelector(".js_modalview");
// 					const cntO = document.querySelector(".js_cntO");
// 					viewOs.forEach((view) => {
// 						view.addEventListener("click", () => {
// 							modalO.classList.add("showM");
// 						});
// 					});
// 					modalO.addEventListener("click", () => {
// 						modalO.classList.remove("showM");
// 					});
// 					cntO.addEventListener("click", (e) => {
// 						e.stopPropagation();
// 					});
// 				} else {
// 					const cntEx = newlistEx.map((elEx) => innerRVex(elEx));
// 					const cntOder = document.querySelector(".js_tableRV");
// 					cntOder.innerHTML = cntEx.join(" ");
// 					const viewOs = document.querySelectorAll(".js_viewO");
// 					const modalO = document.querySelector(".js_modalview");
// 					const cntO = document.querySelector(".js_cntO");
// 					viewOs.forEach((view) => {
// 						view.addEventListener("click", () => {
// 							modalO.classList.add("showM");
// 						});
// 					});
// 					modalO.addEventListener("click", () => {
// 						modalO.classList.remove("showM");
// 					});
// 					cntO.addEventListener("click", (e) => {
// 						e.stopPropagation();
// 					});
// 				}
// 			});
// 		});
// 	})
// 	.then(() => {
// 		const viewOs = document.querySelectorAll(".js_viewO");
// 		const modalO = document.querySelector(".js_modalview");
// 		const cntO = document.querySelector(".js_cntO");
// 		viewOs.forEach((view) => {
// 			view.addEventListener("click", () => {
// 				modalO.classList.add("showM");
// 				console.log(view.dataset.idoder);
// 			});
// 		});
// 		modalO.addEventListener("click", () => {
// 			modalO.classList.remove("showM");
// 		});
// 		cntO.addEventListener("click", (e) => {
// 			e.stopPropagation();
// 		});
// 	});

const innerInf = (
	user
) => `<form action="/update-user" method="POST" class="js_formUd">
	<ul>
		<li><span class="titleinf"><i class='bx bx-user-pin'></i> Full name :</span> <div class="js_hidtext">${user.FullName}</div></li>
		<input class="ipnutInf cssnone js_inputInf" type="text" placeholder="${user.FullName}" value="${user.FullName}" name="FullName">
		<li><span class="titleinf"><i class='bx bx-map'></i> Address :</span> <div class="js_hidtext">${user.Addr}</div></li>
		<input class="ipnutInf cssnone js_inputInf" type="text" placeholder="${user.Addr}" value="${user.Addr}" name="Addr">
		<li><span class="titleinf"><i class='bx bx-envelope'></i> Email :</span> <div>${user.Email}</div></li>
		<input type="text" name="IDuser" hidden value="${user.IDu}">
		<input type="number" name="Old" hidden value="${user.Old}">
		<input type="Email" name="Email" hidden value="${user.Email}">
		<input type="text" name="Pass" hidden value="${user.Pass}">
	</ul>
	<div class="butInf cssnone js_inputInf"><button type="submit">Update</button></div>
	</form>`;
const innerRVunex = (oder) => `<tr>
	<td>${oder.IDo}</td>
	<td>${oder.lenghtCart}</td>
	<td>${oder.DateRental}</td>
	<td>${oder.DatePay}</td>
	<td><div class="status"><p class="unexD">unexpired</p></div></td>
	<td><i class='bx bxs-show js_viewO' data-idoder='${oder.IDo}'></i></td>
	<td><i class='bx bx-x-circle'></i></td>
	</tr>`;
const innerRVunex1 = (oder) => `<tr>
	<td>${oder.IDo}</td>
	<td>${oder.lenghtCart}</td>
	<td>${oder.DateRental}</td>
	<td>${oder.DatePay}</td>
	<td><div class="status"><p class="unexD">unexpired</p></div></td>
	<td><i class='bx bxs-show js_viewO' data-idoder='${oder.IDo}'></i></td>
	<td><i class='bx bx-check-circle'></i></td>
	</tr>`;
const innerRVex = (oder) => `<tr>
	<td>${oder.IDo}</td>
	<td>${oder.lenghtCart}</td>
	<td>${oder.DateRental}</td>
	<td>${oder.DatePay}</td>
	<td><div class="status"><p class="exD">expired</p></div></td>
	<td><i class='bx bxs-show js_viewO' data-idoder='${oder.IDo}'></i></td>
	<td><i class='bx bx-x-circle'></i></td>
	</tr>`;
const innerRVex1 = (oder) => `<tr>
	<td>${oder.IDo}</td>
	<td>${oder.lenghtCart}</td>
	<td>${oder.DateRental}</td>
	<td>${oder.DatePay}</td>
	<td><div class="status"><p class="exD">expired</p></div></td>
	<td><i class='bx bxs-show js_viewO' data-idoder='${oder.IDo}'></i></td>
	<td><i class='bx bx-check-circle'></i></td>
	</tr>`;
const innerVOuser = (user) => `<div class="cntV">
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
	</div>`;
const innerDetailView = (oder, listName) => `<div class="cntV">
	<span style="min-width: 143px;"><i class='bx bxs-book-add'></i> Rented books :</span>
	<div class="cntText spantext">(<span style="color: black; font-size: 14px;">${oder.lenghtCart}</span>)  ${listName}</div>
	</div>
	<div class="cntV">
	<span><i class='bx bx-calendar-check'></i> Book rental date :</span>
	<div class="cntText ">${oder.DateRental}</div>
	</div>
	<div class="cntV">
	<span><i class='bx bx-calendar-check'></i> Date of payment :</span>
	<div class="cntText">${oder.DatePay}</div>
	</div>`;
