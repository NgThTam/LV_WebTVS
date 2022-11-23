const showErrorchangepass = (input, mess) => {
	let parent = input.parentElement;
	let small = parent.querySelector("small");
	small.innerHTML = mess;
};
const valiformchange = (formchangepass) => {
	const testpassnew = /^.{8,16}$/;
	//mkcu
	if (!formchangepass[0].value) {
		showErrorchangepass(formchangepass[0], "No empty!");
		return false;
	} else {
		showErrorchangepass(formchangepass[0], "");
	}
	//mkmoi
	if (!formchangepass[1].value) {
		showErrorchangepass(formchangepass[1], "No empty!");
		return false;
	} else {
		if (!testpassnew.test(formchangepass[1].value)) {
			showErrorchangepass(
				formchangepass[1],
				"Password must be between 8 and 16 characters"
			);
			return false;
		} else {
			showErrorchangepass(formchangepass[1], "");
		}
	}
	//kt-mkmoi
	if (!formchangepass[2].value) {
		showErrorchangepass(formchangepass[2], "No empty!");
		return false;
	} else {
		if (formchangepass[2].value != formchangepass[1].value) {
			showErrorchangepass(formchangepass[2], "Password does not match");
			return false;
		} else {
			showErrorchangepass(formchangepass[2], "");
		}
	}

	return true;
};
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
		// console.log(Iuser);
		//vali form changepass word
		const formchangepass = document.querySelector(".js_formchangepass");

		formchangepass.addEventListener("submit", (e) => {
			if (valiformchange(formchangepass)) {
				if (formchangepass[0].value != atob(Iuser.Pass)) {
					showErrorchangepass(formchangepass[0], "Incorrect password");
					e.preventDefault();
				} else {
					formchangepass[2].value = btoa(formchangepass[1].value);
					formchangepass[3].value = Iuser.IDu;
					bodyfullchange.classList.remove("changePflex");
					window.alert("Password update successful ^.^");
				}
			} else {
				e.preventDefault();
			}
		});
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
					let namPay = eloder.DatePay.slice(6, 10);
					let namRen = eloder.DateRental.slice(6, 10);
					let thangPay = parseInt(eloder.DatePay.slice(3, 5));
					let thangRen = parseInt(eloder.DateRental.slice(3, 5));
					let ngayPay = parseInt(eloder.DatePay.slice(0, 2));
					let ngayRen = parseInt(eloder.DateRental.slice(0, 2));
					let priceVcart = eloder.lenghtCart * 0.5;
					let pricePay = 0;
					if (namPay - namRen == 0) {
						if (thangPay - thangRen == 0) {
							let songay = ngayPay - ngayRen;
							pricePay = priceVcart * songay;
						} else {
							let songay = (thangPay - thangRen) * 31 + ngayPay - ngayRen;
							pricePay = priceVcart * songay;
						}
					}
					eloder.pricePay = parseFloat(pricePay);
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
				// console.log(listOder);
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
							//chi phi phat
							const proPais = document.querySelectorAll(".js_pricepai_profile");
							proPais.forEach((proPai) => {
								proPai.addEventListener("click", () => {
									const eloderoke = listOder.find(
										(loder) => loder.IDo == proPai.dataset.idvpai
									);
									const homnaypaid = new Date();
									let namnay = homnaypaid.getFullYear();
									let nampaid = eloderoke.DatePay.slice(6, 10);
									let thangnay = homnaypaid.getMonth() + 1;
									let thangpaid = eloderoke.DatePay.slice(3, 5);
									let ngaynay = homnaypaid.getDate();
									let ngaypaid = eloderoke.DatePay.slice(0, 2);
									let pricePaid;
									if (eloderoke.status == "unexpired") {
										pricePaid = 0;
									} else {
										if (namnay - nampaid == 0) {
											if (thangnay - thangpaid == 0) {
												let songaypaid = ngaynay - ngaypaid;
												let priceacrtoder =
													eloderoke.lenghtCart * 0.6 * songaypaid;
												pricePaid = priceacrtoder;
											} else {
												let songaypaid =
													(thangnay - thangpaid) * 31 + ngaynay - ngaypaid;
												let priceacrtoder =
													eloderoke.lenghtCart * 0.6 * songaypaid;
												pricePaid = priceacrtoder;
											}
										} else {
											console.log("khac nam");
										}
									}
									// console.log(Math.round(pricePaid * 100) / 100);
									document.getElementById(
										`paid${proPai.dataset.idvpai}`
									).innerHTML = `<p><span style="color: red;font-weight: 600;">$ </span>${pricePaid}</p>`;
								});
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
				const proPais = document.querySelectorAll(".js_pricepai_profile");
				proPais.forEach((proPai) => {
					proPai.addEventListener("click", () => {
						const eloderoke = listOder.find(
							(loder) => loder.IDo == proPai.dataset.idvpai
						);
						const homnaypaid = new Date();
						let namnay = homnaypaid.getFullYear();
						let nampaid = eloderoke.DatePay.slice(6, 10);
						let thangnay = homnaypaid.getMonth() + 1;
						let thangpaid = eloderoke.DatePay.slice(3, 5);
						let ngaynay = homnaypaid.getDate();
						let ngaypaid = eloderoke.DatePay.slice(0, 2);
						let pricePaid;
						if (eloderoke.status == "unexpired") {
							pricePaid = 0;
						} else {
							if (namnay - nampaid == 0) {
								if (thangnay - thangpaid == 0) {
									let songaypaid = ngaynay - ngaypaid;
									let priceacrtoder = eloderoke.lenghtCart * 0.6 * songaypaid;
									pricePaid = priceacrtoder;
								} else {
									let songaypaid =
										(thangnay - thangpaid) * 31 + ngaynay - ngaypaid;
									let priceacrtoder = eloderoke.lenghtCart * 0.6 * songaypaid;
									pricePaid = priceacrtoder;
								}
							} else {
								console.log("khac nam");
							}
						}
						// console.log(Math.round(pricePaid * 100) / 100);
						document.getElementById(
							`paid${proPai.dataset.idvpai}`
						).innerHTML = `<p><span style="color: red;font-weight: 600;">$ </span>${pricePaid}</p>`;
					});
				});
			});
		return books;
	})
	.then((books) => {
		fetch("http://localhost:3000/api/v1/likes")
			.then((res) => res.json())
			.then((likes) => {
				const innerBookLike = document.querySelector(".js_renderlikelist");
				const iduserLike = localStorage.getItem("IDuser");
				const userLike = likes.find((lk) => lk.IDu == iduserLike);
				const arrLike = userLike.ListBook.split(",");
				const renderBookLike = [];
				arrLike.forEach((like) => {
					renderBookLike.push(
						renderLike(books.find((book) => book.IDb == like))
					);
				});
				innerBookLike.innerHTML = renderBookLike.join(" ");
				const alikes = document.querySelectorAll(".js_likedetail");
				alikes.forEach((alike) => {
					alike.addEventListener("click", () => {
						localStorage.setItem("id_book", alike.dataset.idblike);
					});
				});
				const formDebooklikes = document.querySelectorAll(".js_formdelikes");
				formDebooklikes.forEach((formdelike) => {
					formdelike.addEventListener("submit", () => {
						formdelike[0].value = iduserLike;
					});
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
	<td style="text-align: left;"><span style="color: #12a837; font-weight: 600;">$ </span>${oder.pricePay}</td>
	<td>${oder.lenghtCart}</td>
	<td>${oder.DateRental}</td>
	<td>${oder.DatePay}</td>
	<td><div class="status"><p class="unexD">unexpired</p></div></td>
	<td><i class='bx bxs-show js_viewO' data-idoder='${oder.IDo}'></i></td>
	<td id="paid${oder.IDo}"><i class='bx bxs-error-circle js_pricepai_profile' style="font-size: 19px; color: #f00a0a;cursor: pointer;" data-idvpai="${oder.IDo}"></i></td>
	</tr>`;
const innerRVunex1 = (oder) => `<tr>
	<td style="text-align: left;"><span style="color: #12a837; font-weight: 600;">$ </span>${oder.pricePay}</td>
	<td>${oder.lenghtCart}</td>
	<td>${oder.DateRental}</td>
	<td>${oder.DatePay}</td>
	<td><div class="status"><p class="unexD">unexpired</p></div></td>
	<td><i class='bx bxs-show js_viewO' data-idoder='${oder.IDo}'></i></td>
	<td><i class='bx bx-check-circle'></i></td>
	</tr>`;
const innerRVex = (oder) => `<tr>
	<td style="text-align: left;"><span style="color: #12a837; font-weight: 600;">$ </span>${oder.pricePay}</td>
	<td>${oder.lenghtCart}</td>
	<td>${oder.DateRental}</td>
	<td>${oder.DatePay}</td>
	<td><div class="status"><p class="exD">expired</p></div></td>
	<td><i class='bx bxs-show js_viewO' data-idoder='${oder.IDo}'></i></td>
	<td id="paid${oder.IDo}"><i class='bx bxs-error-circle js_pricepai_profile' style="font-size: 19px; color: #f00a0a;cursor: pointer;" data-idvpai="${oder.IDo}"></i></td>
	</tr>`;
const innerRVex1 = (oder) => `<tr>
	<td style="text-align: left;"><span style="color: #12a837; font-weight: 600;">$ </span>${oder.pricePay}</td>
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
const renderLike = (book) => {
	return `<div class="paddingEllike">
				<div class="ellike">
					<img src="${book.ImgB}" alt="">
					<div class="iconlistLi">
						<div><i class='bx bxs-heart' style="color: red;"></i></div>
						<div><a href="/detail" class="js_likedetail" data-idblike="${book.IDb}"><i class='bx bx-search'></i></a></div>
						<div>
							<form action="/delete-book-like" method="POST" class="js_formdelikes">
								<input type="text" name="idu" id="" hidden>
								<input type="text" name="idb" id="" hidden value="${book.IDb}">
								<button type="submit" class="submitdeLike"><i class='bx bx-trash'></i></button>
							</form>
						</div>
					</div>
				</div>
			</div>`;
};

const bodyfullchange = document.querySelector(".js_bodyfullchange");
const butshowchange = document.querySelector(".js_butshow_change");
const cancelchange = document.querySelector(".js_cancel_change_pass");
const contentchangep = document.querySelector(".js_content_change_pass");
butshowchange.addEventListener("click", () => {
	bodyfullchange.classList.add("changePflex");
});
bodyfullchange.addEventListener("click", () => {
	bodyfullchange.classList.remove("changePflex");
});
cancelchange.addEventListener("click", () => {
	bodyfullchange.classList.remove("changePflex");
});
contentchangep.addEventListener("click", (e) => {
	e.stopPropagation();
});
// thongbao
const innerthongbao = (noti) => {
	return `<div class="elementnoidungtb js_elementndnotic" data-notivoucher="${noti.IDo}">
				<i class='bx bx-error'></i>
				<div class="noidungtbhh">
					<p class="titlenoidungtbhh">${noti.titlenotice}</p>
					<p class="contentnoidungtbhh">${noti.contentnotice}</p>
				</div>
				<div class="bachamdele js_bachamstop">
					<div class="clickbacham js_clicham" data-idnotic="id-${noti.stt}"><i class='bx bx-dots-vertical-rounded'></i></div>
					<div class="contentbachamdele js_hopdeleba" id="id-${noti.stt}">
						<div class="xndelenoti js_actiondele" data-idfdelenoti="idform-${noti.stt}">Delete</div>
						<form action="/delate-notice" method="post" hidden>
                                <input type="text" value="${noti.stt}" name="stt">
                                 <button type="submit" id="idform-${noti.stt}"></button>
                        </form>
					</div>
				</div>
			</div>`;
};
fetch("http://localhost:3000/api/v1/notices")
	.then((res) => res.json())
	.then((notices) => {
		const iduserNo = localStorage.getItem("IDuser");
		const bodythongbao = document.querySelector(".js_noidungthongbao");
		const slthongbao = document.querySelector(".js_slthongbao");
		const iconchuong = document.querySelector(".js_iconchuong");
		const allnoti = notices.filter((noti) => noti.IDu == iduserNo);
		const newnoti = [];
		iconchuong.addEventListener("click", () => {
			bodythongbao.classList.toggle("noidungblock");
		});
		allnoti.forEach((nt) => {
			newnoti.unshift(nt);
		});
		slthongbao.innerHTML = newnoti.length;
		bodythongbao.innerHTML = newnoti
			.map((nnoti) => innerthongbao(nnoti))
			.join(" ");
		// bacham
		const elementnotis = document.querySelectorAll(".js_elementndnotic");
		const bachams = document.querySelectorAll(".js_bachamstop");
		const showphieuthue = document.querySelector(".js_modalview ");
		elementnotis.forEach((anoti) => {
			anoti.addEventListener("click", () => {
				// console.log(anoti.dataset.notivoucher);
				showphieuthue.classList.add("showM");
				bodythongbao.classList.remove("noidungblock");
				homdeles.forEach((hdele) => {
					hdele.classList.remove("bacflex");
				});
			});
		});
		bachams.forEach((bac) => {
			bac.addEventListener("click", (e) => {
				e.stopPropagation();
			});
		});
		//click bacham
		const ic3chams = document.querySelectorAll(".js_clicham");
		const butactiondelenotis = document.querySelectorAll(".js_actiondele");
		const homdeles = document.querySelectorAll(".js_hopdeleba");
		ic3chams.forEach((icch) => {
			icch.addEventListener("click", () => {
				const tabdele = document.getElementById(icch.dataset.idnotic);
				tabdele.classList.toggle("bacflex");
			});
		});
		butactiondelenotis.forEach((butdnoti) => {
			butdnoti.addEventListener("click", () => {
				const acfrom = document.getElementById(butdnoti.dataset.idfdelenoti);
				homdeles.forEach((hdele) => {
					hdele.classList.remove("bacflex");
				});
				acfrom.click();
			});
		});
		// console.log(newnoti);
	})
	.then(() => {
		fetch("http://localhost:3000/api/v1/oders")
			.then((res) => res.json())
			.then((oders) => {
				fetch("http://localhost:3000/api/v1/books")
					.then((res) => res.json())
					.then((books) => {
						const elementnotis =
							document.querySelectorAll(".js_elementndnotic");
						const detviewvouch = document.querySelector(".js_detailView");
						elementnotis.forEach((anoti) => {
							anoti.addEventListener("click", () => {
								const detailoder = oders.find(
									(oder) => oder.IDo == anoti.dataset.notivoucher
								);
								const Cartoder = detailoder.Cart.split(",");
								const listbookoderr = Cartoder.map((elecart) =>
									books.find((book) => book.IDb == elecart)
								);
								detailoder.lenghtCart = listbookoderr.length;
								const listname = listbookoderr.map((lboode) => lboode.NameB);
								detviewvouch.innerHTML = innerDetailView(
									detailoder,
									listname.join("<span>;</span>")
								);
							});
						});
					});
			});
	});
