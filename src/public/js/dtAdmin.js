const renderUser = (user, index) => {
	return `<tr>
				<td>${index}</td>
				<td>${user.Email}</td>
				<td>${user.FullName}</td>
				<td>${user.Old}</td>
				<td>${user.Addr}</td>
				<td><div class="sendmail"><i class='bx bx-mail-send js_iconmail' data-emailu = "${user.Email}"></i></div></td>
			</tr>`;
};
const renderBook = (book) => {
	return `<tr class="tableBadmin">
				<td><img src="${book.ImgB}" alt=""></td>
				<td style="text-align:left;">${book.NameB} <span style="font-size: 12px;color: blue;">(${book.amount})</span></td>
				<td>${book.Author}</td>
				<td>${book.YearPub}</td>
				<td>${book.Publiser}</td>
				<td><i class='bx bxs-pie-chart-alt-2 js_iconPie' data-amountb="${book.amount}" data-namepie="${book.NameB}"></i></td>
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
const innerRVex = (oder) => {
	return `<tr>
				<td>${oder.User.FullName}</td>
				<td>${oder.lenghtCart}</td>
				<td>${oder.DateRental}</td>
				<td>${oder.DatePay}</td>
				<td><div class="status"><p class="exD">expired</p></div></td>
				<td><i class='bx bxs-show divi js_viewO' data-idoder="${oder.IDo}"></i></td>
				<td><form action="/update-paystatus" method="POST" class="js_formCheckoke" data-idform="${oder.Cart}">
                                        <input type="text" name="IDo" hidden value="${oder.IDo}">
                                        <input type="text" name="IDu" hidden value="${oder.IDu}">
                                        <input type="text" name="Cart" hidden value="${oder.Cart}">
                                        <input type="text" name="DateRental" hidden value="${oder.DateRental}">
                                        <input type="text" name="DatePay" hidden value="${oder.DatePay}">
                                        <input type="text" name="PayStatus" hidden value="1">
										<input type="text" name="ListAmount" hidden >
                                        <button class="butPaystatus" type="submit">yes</button>
                                    </form>
				</td>
				<td>
                    <div class="contentsendnoti">
                        <p class="sendnotices js_clickshownoti" data-idshow="id-${oder.IDo}">Send notifications</p>
                        <div class="choosesendnoti js_body_choosenoti" id="id-${oder.IDo}">
							<div class="elechoosenoti js_subformexnoti" data-idformex="ex-${oder.IDo}">expired</div>
                            <div class="elechoosenoti js_shownotimessage" data-idumessage="${oder.IDu}" data-idomessage="${oder.IDo}">message</div>
                        </div>
						<form action="/create-notice" method="post" hidden>
                                            <input type="text" name="idu" value="${oder.IDu}">
                                            <input type="text" name="ido" value="${oder.IDo}">
                                            <input type="text" name="title" value="Notice Expiration">
                                            <input type="text" name="content" value="1 book rental voucher has expired">
                                            <button type="submit" id="ex-${oder.IDo}"></button>
                        </form>
                    </div>
                </td>
				
			</tr>`;
};
const innerRVex1 = (oder) => {
	return `<tr>
				<td>${oder.User.FullName}</td>
				<td>${oder.lenghtCart}</td>
				<td>${oder.DateRental}</td>
				<td>${oder.DatePay}</td>
				<td><div class="status"><p class="exD">expired</p></div></td>
				<td><i class='bx bxs-show divi js_viewO' data-idoder="${oder.IDo}"></i></td>
				<td><i class='bx bx-check-circle'></i></td>
				<td>
                    <div class="contentsendnoti">
                        <p class="sendnotices js_clickshownoti" data-idshow="id-${oder.IDo}">Send notifications</p>
                        <div class="choosesendnoti js_body_choosenoti" id="id-${oder.IDo}">
							<div class="elechoosenoti js_subformexnoti" data-idformex="ex-${oder.IDo}">expired</div>
                            <div class="elechoosenoti js_shownotimessage" data-idumessage="${oder.IDu}" data-idomessage="${oder.IDo}">message</div>
                        </div>
						<form action="/create-notice" method="post" hidden>
                                            <input type="text" name="idu" value="${oder.IDu}">
                                            <input type="text" name="ido" value="${oder.IDo}">
                                            <input type="text" name="title" value="Notice Expiration">
                                            <input type="text" name="content" value="1 book rental voucher has expired">
                                            <button type="submit" id="ex-${oder.IDo}"></button>
                        </form>
                    </div>
                </td>
			</tr>`;
};
const innerRVunex = (oder) => {
	return `<tr>
				<td>${oder.User.FullName}</td>
				<td>${oder.lenghtCart}</td>
				<td>${oder.DateRental}</td>
				<td>${oder.DatePay}</td>
				<td><div class="status"><p class="unexD">unexpired</p></div></td>
				<td><i class='bx bxs-show divi js_viewO' data-idoder="${oder.IDo}"></i></td>
				<td><form action="/update-paystatus" method="POST" class="js_formCheckoke" data-idform="${oder.Cart}">
										<input type="text" name="IDo" hidden value="${oder.IDo}">
										<input type="text" name="IDu" hidden value="${oder.IDu}">
										<input type="text" name="Cart" hidden value="${oder.Cart}">
										<input type="text" name="DateRental" hidden value="${oder.DateRental}">
										<input type="text" name="DatePay" hidden value="${oder.DatePay}">
                                        <input type="text" name="PayStatus" hidden value="1">
										<input type="text" name="ListAmount" hidden >
                                        <button class="butPaystatus" type="submit">yes</button>
                                    </form></td>
				<td>
                    <div class="contentsendnoti">
                        <p class="sendnotices js_clickshownoti" data-idshow="id-${oder.IDo}">Send notifications</p>
                        <div class="choosesendnoti js_body_choosenoti" id="id-${oder.IDo}">
							<div class="elechoosenoti js_subformexnoti" data-idformex="ex-${oder.IDo}">expired</div>
                            <div class="elechoosenoti js_shownotimessage" data-idumessage="${oder.IDu}" data-idomessage="${oder.IDo}">message</div>
                        </div>
						<form action="/create-notice" method="post" hidden>
                                            <input type="text" name="idu" value="${oder.IDu}">
                                            <input type="text" name="ido" value="${oder.IDo}">
                                            <input type="text" name="title" value="Notice Expiration">
                                            <input type="text" name="content" value="1 book rental voucher has expired">
                                            <button type="submit" id="ex-${oder.IDo}"></button>
                        </form>
                    </div>
                </td>
			</tr>`;
};
const innerRVunex1 = (oder) => {
	return `<tr>
				<td>${oder.User.FullName}</td>
				<td>${oder.lenghtCart}</td>
				<td>${oder.DateRental}</td>
				<td>${oder.DatePay}</td>
				<td><div class="status"><p class="unexD">unexpired</p></div></td>
				<td><i class='bx bxs-show divi js_viewO' data-idoder="${oder.IDo}"></i></td>
				<td><i class='bx bx-check-circle'></i></td>
				<td>
                    <div class="contentsendnoti">
                        <p class="sendnotices js_clickshownoti" data-idshow="id-${oder.IDo}">Send notifications</p>
                        <div class="choosesendnoti js_body_choosenoti" id="id-${oder.IDo}">
                            <div class="elechoosenoti js_subformexnoti" data-idformex="ex-${oder.IDo}">expired</div>
                            <div class="elechoosenoti js_shownotimessage" data-idumessage="${oder.IDu}" data-idomessage="${oder.IDo}">message</div>
                        </div>
						<form action="/create-notice" method="post" hidden>
                                            <input type="text" name="idu" value="${oder.IDu}">
                                            <input type="text" name="ido" value="${oder.IDo}">
                                            <input type="text" name="title" value="Notice Expiration">
                                            <input type="text" name="content" value="1 book rental voucher has expired">
                                            <button type="submit" id="ex-${oder.IDo}"></button>
                        </form>
                    </div>
                </td>
			</tr>`;
};
const innerDetailView = (oder, listName) => {
	return `<div class="js_viewVouUser">
				<div class="cntV">
					<span><i class='bx bxs-user'></i> Full name of book tenant :</span>
					<div class="cntText">${oder.User.FullName}</div>
				</div>
				<div class="cntV">
					<span><i class='bx bxs-map-pin' ></i> The address of the book renter :</span>
					<div class="cntText">${oder.User.Addr}</div>
				</div>
				<div class="cntV">
					<span><i class='bx bx-mail-send'></i> Contact email :</span>
					<div class="cntText">${oder.User.Email}</div>
				</div>
			</div>
			<div >
				<div class="cntV">
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
				</div>
			</div>`;
};
const innerBookSF = (book) => {
	return `<tr class="tableBadmin">
				<td><img src="${book.ImgB}" alt=""></td>
				<td style="text-align:left;">${book.NameB}</td>
				<td>${book.Author}</td>
				<td>${book.YearPub}</td>
				<td>${book.Publiser}</td>
				<td>10</td>
				<td>${book.amount}</td>
			</tr>`;
};
const innerBookexcel = (book) => {
	return `<tr>
				<td>B-${book.IDb}</td>
				<td>${book.NameB}</td>
				<td>${book.Author}</td>
				<td>${book.YearPub}</td>
				<td>${book.Publiser}</td>
				<td>10</td>
				<td>${book.amount}</td>
				<td>${book.ImgB}</td>
			</tr>`;
};
const innercategories = (cate) => {
	return `<tr>
				<td>${cate.NameC}</td>
				<td style="display: flex;justify-content: center;align-items: center;">
					<i class='bx bxs-edit-alt js_editcate' data-namecate="${cate.NameC}" data-idcate="${cate.IDc}"></i>
					<span style="padding: 0px 0px 0px 5px;">-</span>
					<i class='bx bx-x js_but_dele_ban' data-idbancate="${cate.IDc}"></i>
					<form action="/delete-acategory" hidden method="post">
						<input type="text" name="idcategory" value="${cate.IDc}">
						<button class="js_thucthi" type="submit" id="dele-${cate.IDc}"></button>
					</form>
				</td>
			</tr>`;
};
const innerfeedback = (fb) => {
	return `<tr>
				<td>${fb.femail}</td>
				<td>${fb.fdate}</td>
				<td>${fb.message}</td>
				<td style="text-align: center;"><i class='bx bx-mail-send js_iconmail' data-mailto="${fb.femail}"></i></td>
				<td style="text-align: center;"><i class='bx bx-x js_icondelefeedback' data-idfeedback="${fb.IDf}"></i>
					<form action="/delete-feedback" hidden method="post">
						<input type="text" name="idfb" value="${fb.IDf}">
						<button id="fb-${fb.IDf}" type="submit"></button>
					</form>
				</td>
				
			</tr>`;
};

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
			const banner = document.querySelector(".js_banner");
			const butNo = document.querySelector(".js_no");
			const bodybanner = document.querySelector(".bodybanner");
			const butYes = document.querySelector(".js_yes");
			listdelete.forEach((icondele) => {
				icondele.addEventListener("click", () => {
					banner.setAttribute("style", "display: flex;");
					butYes.setAttribute("data-idfyes", `${icondele.dataset.iddelete}`);
				});
			});
			butNo.addEventListener("click", () => {
				banner.removeAttribute("style");
			});
			banner.addEventListener("click", () => {
				banner.removeAttribute("style");
			});
			bodybanner.addEventListener("click", (e) => {
				e.stopPropagation();
			});
			butYes.addEventListener("click", () => {
				document.getElementById(butYes.dataset.idfyes).click();
			});
			const iconpies = document.querySelectorAll(".js_iconPie");
			iconpies.forEach((iconPie) => {
				iconPie.addEventListener("click", () => {
					const clamount = iconPie.dataset.amountb;
					const donamount = 10 - iconPie.dataset.amountb;
					const nametitle = iconPie.dataset.namepie;
					Highcharts.chart("HighChartOneB", {
						colors: ["#01BAF2", "#ff0000ad"],
						chart: {
							type: "pie",
						},
						title: {
							text: `<p style="font-weight: 600;">${nametitle}</p>`,
						},
						tooltip: {
							valueSuffix: "books",
						},
						subtitle: {
							text: "amount of books",
						},
						plotOptions: {
							pie: {
								allowPointSelect: true,
								cursor: "pointer",
								dataLabels: {
									enabled: true,
									format: "{point.name} ",
								},
								showInLegend: true,
							},
						},
						series: [
							{
								name: "Quantity",
								colorByPoint: true,
								data: [
									{
										name: "Remaining",
										y: parseInt(clamount),
									},
									{
										name: "Unpaid",
										sliced: true,
										selected: true,
										y: parseInt(donamount),
									},
								],
							},
						],
					});
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
		const banner = document.querySelector(".js_banner");
		const butNo = document.querySelector(".js_no");
		const bodybanner = document.querySelector(".bodybanner");
		const butYes = document.querySelector(".js_yes");
		listdelete.forEach((icondele) => {
			icondele.addEventListener("click", () => {
				banner.setAttribute("style", "display: flex;");
				butYes.setAttribute("data-idfyes", `${icondele.dataset.iddelete}`);
			});
		});
		butNo.addEventListener("click", () => {
			banner.removeAttribute("style");
		});
		banner.addEventListener("click", () => {
			banner.removeAttribute("style");
		});
		bodybanner.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		butYes.addEventListener("click", () => {
			document.getElementById(butYes.dataset.idfyes).click();
		});
		return books;
	})
	//chartcolumn
	.then((books) => {
		fetch("http://localhost:3000/api/v1/categories")
			.then((res) => res.json())
			.then((categories) => {
				fetch("http://localhost:3000/api/v1/book_category")
					.then((res) => res.json())
					.then((BookCategories) => {
						const arrCate = BookCategories.map((cateB) => cateB.IDc);
						let newArrCate = [...new Set(arrCate)];
						let arrrrr = newArrCate.map((cate) => {
							let countCt = BookCategories.filter((ct) => ct.IDc == cate);
							let bookctamount = countCt.map((cct) => {
								return books.find((boob) => boob.IDb == cct.IDb);
							});
							let amountC = bookctamount
								.map((ba) => ba.amount)
								.reduce((tot, num) => tot + num);
							let amountM = bookctamount.length * 10 - amountC;
							return {
								IDc: cate,
								count: countCt.length,
								amountC: amountC,
								amountM: amountM,
							};
						});
						const nameC = [];
						const contC = [];
						const amC = [];
						const amM = [];
						arrrrr.forEach((alar) => {
							contC.push(alar.count);
							let okcate = categories.find((ctt) => ctt.IDc == alar.IDc);
							if (okcate) {
								nameC.push(okcate.NameC);
							} else {
								nameC.push(alar.IDc);
							}
							amC.push(alar.amountC);
							amM.push(alar.amountM);
						});
						Highcharts.setOptions({
							colors: ["#90ed7d", "#7cb5ec", "red"],
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
								text: "Statistics by book genre",
							},
							xAxis: {
								categories: nameC,
								title: {
									text: null,
								},
								accessibility: {
									description: "Countries",
								},
							},
							yAxis: {
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
									},
								},
							},
							tooltip: {
								valueSuffix: " books",
								stickOnContact: true,
								backgroundColor: "rgba(255, 255, 255, 0.93)",
							},
							legend: {
								enabled: true,
							},
							series: [
								{
									name: "Different",
									data: contC,
								},
								{
									name: "Remaining",
									data: amC,
									borderColor: "#5997DE",
								},
								{
									name: "Lent books",
									data: amM,
								},
							],
						});
						// Highcharts.chart("HighChartPubYear", {
						// 	chart: {
						// 		type: "column",
						// 		zoomType: "y",
						// 	},
						// 	title: {
						// 		text: "Number of books available at the bookstore",
						// 	},
						// 	subtitle: {
						// 		text: "Statistics by book genre",
						// 	},
						// 	xAxis: {
						// 		categories: nameC,
						// 		title: {
						// 			text: null,
						// 		},
						// 		accessibility: {
						// 			description: "Countries",
						// 		},
						// 	},
						// 	yAxis: {
						// 		min: 0,
						// 		tickInterval: 2,
						// 		title: {
						// 			text: "The number of books the bookstore has",
						// 		},
						// 		labels: {
						// 			overflow: "justify",
						// 			format: "{value}",
						// 		},
						// 	},
						// 	plotOptions: {
						// 		column: {
						// 			dataLabels: {
						// 				enabled: true,
						// 				format: "{y} books",
						// 			},
						// 		},
						// 	},
						// 	tooltip: {
						// 		valueSuffix: " books",
						// 		stickOnContact: true,
						// 		backgroundColor: "rgba(255, 255, 255, 0.93)",
						// 	},
						// 	legend: {
						// 		enabled: false,
						// 	},
						// 	series: [
						// 		{
						// 			name: "This bookstore has",
						// 			data: contC,
						// 			borderColor: "#5997DE",
						// 		},
						// 	],
						// });
					});
			});
		return books;
	})
	//oder
	.then((books) => {
		fetch("http://localhost:3000/api/v1/oders")
			.then((res) => res.json())
			.then((oders) => {
				fetch("http://localhost:3000/api/v1/users")
					.then((res) => res.json())
					.then((users) => {
						const scr3 = document.querySelector(".js_scr3");
						let Today = new Date();
						scr3.addEventListener("click", () => {
							Today = new Date();
						});
						let Tomonth = Today.getMonth() + 1;
						const newlistOder = [];
						oders.forEach((eloder) => {
							const lengthCart = eloder.Cart.split(",").length;
							eloder.lenghtCart = lengthCart;
							const userOder = users.find((user) => user.IDu == eloder.IDu);
							// eloder.NameUser = userOder.FullName;
							eloder.User = userOder;
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
						const innerListOder = document.querySelector(".js_innOder");
						innerListOder.innerHTML = newlistOder.join(" ");
						//check da thanh toan
						const listformU = document.querySelectorAll(".js_formCheckoke");
						listformU.forEach((formUp) => {
							formUp.addEventListener("submit", (e) => {
								// e.preventDefault();
								const arrCart = formUp.dataset.idform.split(",");
								const newCartamount = [];
								arrCart.forEach((acrt) => {
									const adBoook = books.find((bookk) => bookk.IDb == acrt);
									newCartamount.push(`${adBoook.IDb},${adBoook.amount}`);
								});
								formUp[6].value = newCartamount.join(";");
							});
						});
						//show choose noti
						const iconchoose = document.querySelectorAll(".js_clickshownoti");
						iconchoose.forEach((icon) => {
							icon.addEventListener("click", () => {
								const bodyshow = document.getElementById(icon.dataset.idshow);
								bodyshow.classList.toggle("showchnoti");
							});
						});
						const allbodynoti = document.querySelectorAll(
							".js_body_choosenoti"
						);
						const allclickshow = document.querySelectorAll(
							".js_shownotimessage"
						);
						const subformexnoti =
							document.querySelectorAll(".js_subformexnoti");
						const bodyfullnotimassage = document.querySelector(
							".js_bodymodalnotimessage"
						);
						subformexnoti.forEach((subf) => {
							subf.addEventListener("click", () => {
								const submitformexnotices = document.getElementById(
									subf.dataset.idformex
								);
								submitformexnotices.click();
								allbodynoti.forEach((bdnoti) => {
									bdnoti.classList.remove("showchnoti");
								});
							});
						});
						allclickshow.forEach((aclickshow) => {
							aclickshow.addEventListener("click", () => {
								const formnotisubcreate =
									document.querySelector(".js_formcreatenoti");
								formnotisubcreate[0].value = aclickshow.dataset.idumessage;
								formnotisubcreate[1].value = aclickshow.dataset.idomessage;
								allbodynoti.forEach((bdnoti) => {
									bdnoti.classList.remove("showchnoti");
								});
								bodyfullnotimassage.classList.add("notiflex");
							});
						});
					})
					.then(() => {
						const iconfils = document.querySelectorAll(".js_filStatus");
						const newlistUn = [];
						const newlistEx = [];
						oders.forEach((od) => {
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
									const innerListOder = document.querySelector(".js_innOder");
									innerListOder.innerHTML = cntUn.join(" ");
									const listformU =
										document.querySelectorAll(".js_formCheckoke");
									listformU.forEach((formUp) => {
										formUp.addEventListener("submit", (e) => {
											// e.preventDefault();
											const arrCart = formUp.dataset.idform.split(",");
											const newCartamount = [];
											arrCart.forEach((acrt) => {
												const adBoook = books.find(
													(bookk) => bookk.IDb == acrt
												);
												newCartamount.push(`${adBoook.IDb},${adBoook.amount}`);
											});
											formUp[6].value = newCartamount.join(";");
										});
									});
									const viewOs = document.querySelectorAll(".js_viewO");
									const modalO = document.querySelector(".js_modalview");
									const cntO = document.querySelector(".js_cntO");
									viewOs.forEach((view) => {
										view.addEventListener("click", () => {
											modalO.classList.add("showM");
											let listNameBooks = [];
											const Ooder = oders.find(
												(Odd) => Odd.IDo == view.dataset.idoder
											);
											// console.log(Ooder);
											const listIDb = Ooder.Cart.split(",");
											listIDb.forEach((IDbook) => {
												books.forEach((book) => {
													if (IDbook == book.IDb) {
														listNameBooks.push(book.NameB);
													}
												});
											});
											const detailView =
												document.querySelector(".js_detailView");
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
									//show choose noti
									const iconchoose =
										document.querySelectorAll(".js_clickshownoti");
									iconchoose.forEach((icon) => {
										icon.addEventListener("click", () => {
											const bodyshow = document.getElementById(
												icon.dataset.idshow
											);
											bodyshow.classList.toggle("showchnoti");
										});
									});
									const allbodynoti = document.querySelectorAll(
										".js_body_choosenoti"
									);
									const allclickshow = document.querySelectorAll(
										".js_shownotimessage"
									);
									const subformexnoti =
										document.querySelectorAll(".js_subformexnoti");
									const bodyfullnotimassage = document.querySelector(
										".js_bodymodalnotimessage"
									);
									subformexnoti.forEach((subf) => {
										subf.addEventListener("click", () => {
											const submitformexnotices = document.getElementById(
												subf.dataset.idformex
											);
											submitformexnotices.click();
											allbodynoti.forEach((bdnoti) => {
												bdnoti.classList.remove("showchnoti");
											});
										});
									});
									allclickshow.forEach((aclickshow) => {
										aclickshow.addEventListener("click", () => {
											const formnotisubcreate =
												document.querySelector(".js_formcreatenoti");
											formnotisubcreate[0].value =
												aclickshow.dataset.idumessage;
											formnotisubcreate[1].value =
												aclickshow.dataset.idomessage;
											allbodynoti.forEach((bdnoti) => {
												bdnoti.classList.remove("showchnoti");
											});
											bodyfullnotimassage.classList.add("notiflex");
										});
									});
								} else {
									const cntEx = newlistEx.map((elEx) => {
										if (elEx.PayStatus == 0) {
											return innerRVex(elEx);
										} else {
											return innerRVex1(elEx);
										}
									});
									const innerListOder = document.querySelector(".js_innOder");
									innerListOder.innerHTML = cntEx.join(" ");
									const listformU =
										document.querySelectorAll(".js_formCheckoke");
									listformU.forEach((formUp) => {
										formUp.addEventListener("submit", (e) => {
											// e.preventDefault();
											const arrCart = formUp.dataset.idform.split(",");
											const newCartamount = [];
											arrCart.forEach((acrt) => {
												const adBoook = books.find(
													(bookk) => bookk.IDb == acrt
												);
												newCartamount.push(`${adBoook.IDb},${adBoook.amount}`);
											});
											formUp[6].value = newCartamount.join(";");
										});
									});
									const viewOs = document.querySelectorAll(".js_viewO");
									const modalO = document.querySelector(".js_modalview");
									const cntO = document.querySelector(".js_cntO");
									viewOs.forEach((view) => {
										view.addEventListener("click", () => {
											modalO.classList.add("showM");
											let listNameBooks = [];
											const Ooder = oders.find(
												(Odd) => Odd.IDo == view.dataset.idoder
											);
											// console.log(Ooder);
											const listIDb = Ooder.Cart.split(",");
											listIDb.forEach((IDbook) => {
												books.forEach((book) => {
													if (IDbook == book.IDb) {
														listNameBooks.push(book.NameB);
													}
												});
											});
											const detailView =
												document.querySelector(".js_detailView");
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
									//show choose noti
									const iconchoose =
										document.querySelectorAll(".js_clickshownoti");
									iconchoose.forEach((icon) => {
										icon.addEventListener("click", () => {
											const bodyshow = document.getElementById(
												icon.dataset.idshow
											);
											bodyshow.classList.toggle("showchnoti");
										});
									});
									const allbodynoti = document.querySelectorAll(
										".js_body_choosenoti"
									);
									const allclickshow = document.querySelectorAll(
										".js_shownotimessage"
									);
									const subformexnoti =
										document.querySelectorAll(".js_subformexnoti");
									const bodyfullnotimassage = document.querySelector(
										".js_bodymodalnotimessage"
									);
									subformexnoti.forEach((subf) => {
										subf.addEventListener("click", () => {
											const submitformexnotices = document.getElementById(
												subf.dataset.idformex
											);
											submitformexnotices.click();
											allbodynoti.forEach((bdnoti) => {
												bdnoti.classList.remove("showchnoti");
											});
										});
									});
									allclickshow.forEach((aclickshow) => {
										aclickshow.addEventListener("click", () => {
											const formnotisubcreate =
												document.querySelector(".js_formcreatenoti");
											formnotisubcreate[0].value =
												aclickshow.dataset.idumessage;
											formnotisubcreate[1].value =
												aclickshow.dataset.idomessage;
											allbodynoti.forEach((bdnoti) => {
												bdnoti.classList.remove("showchnoti");
											});
											bodyfullnotimassage.classList.add("notiflex");
										});
									});
								}
							});
						});
					})
					.then(() => {
						const viewOs = document.querySelectorAll(".js_viewO");
						const modalO = document.querySelector(".js_modalview");
						const cntO = document.querySelector(".js_cntO");
						viewOs.forEach((view) => {
							view.addEventListener("click", () => {
								modalO.classList.add("showM");
								let listNameBooks = [];
								const Ooder = oders.find(
									(Odd) => Odd.IDo == view.dataset.idoder
								);
								// console.log(Ooder);
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
				return oders;
			})
			//chart
			.then((oders) => {
				const value12month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
				const listvalueMonth = value12month.map((month) => {
					const listValue = oders.filter(
						(oder) => parseInt(oder.DateRental.slice(3, 5)) == month
					);
					return listValue.length;
				});
				Highcharts.chart("ChartOderY", {
					title: {
						text: "Statistics of rental orders in 2022",
					},
					xAxis: {
						categories: [
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"Jun",
							"Jul",
							"Aug",
							"Sep",
							"Oct",
							"Nov",
							"Dec",
						],
					},
					yAxis: {
						title: {
							text: "number of orders",
						},
						plotLines: [
							{
								value: 0,
								width: 1,
								color: "#808080",
							},
						],
					},
					tooltip: {
						valueSuffix: " oders",
					},
					legend: {
						enabled: false,
					},
					series: [
						{
							name: "This month there are",
							data: listvalueMonth,
						},
					],
				});
				return oders;
			})
			//filterS
			.then((oders) => {
				const butfilSs = document.querySelector(".js_butFillSt");
				const filldayF = document.querySelector(".js_date_day");
				const filldmonthF = document.querySelector(".js_date_month");
				const fillyearF = document.querySelector(".js_date_year");
				const todayD = new Date();
				fillyearF.value = `${todayD.getFullYear()}-01-01`;
				butfilSs.addEventListener("click", () => {
					let newarrFilldate = [];
					let arrFillfinal = [];
					let arrFillfinal1 = [];
					let checkedSta = document.querySelector(
						'input[name="statusF"]:checked'
					);
					let checkedpayment = document.querySelector(
						'input[name="statusPayment"]:checked'
					);
					const fillbyyear = oders.filter(
						(oder) =>
							oder.DateRental.slice(6, 10) == fillyearF.value.slice(0, 4)
					);
					if (filldayF.value == "00" && filldmonthF.value == "00") {
						newarrFilldate = fillbyyear;
					} else {
						if (filldayF.value == "00" || filldmonthF.value == "00") {
							if (filldayF.value == "00") {
								newarrFilldate = fillbyyear.filter((byear) => {
									return byear.DateRental.slice(3, 5) == filldmonthF.value;
								});
							} else {
								newarrFilldate = fillbyyear.filter((byear1) => {
									return byear1.DateRental.slice(0, 2) == filldayF.value;
								});
							}
						} else {
							let filFday = `${filldayF.value}/${
								filldmonthF.value
							}/${fillyearF.value.slice(0, 4)}`;
							newarrFilldate = fillbyyear.filter((byear2) => {
								return byear2.DateRental == filFday;
							});
						}
					}
					// console.log(newarrFilldate);
					if (checkedSta.value == "All") {
						arrFillfinal = newarrFilldate;
					} else {
						arrFillfinal = newarrFilldate.filter((arffdate) => {
							return arffdate.status == checkedSta.value;
						});
					}
					if (checkedpayment.value == "All") {
						arrFillfinal1 = arrFillfinal;
					} else {
						arrFillfinal1 = arrFillfinal.filter((arrf1) => {
							return arrf1.PayStatus == checkedpayment.value;
						});
					}
					// console.log(checkedpayment.value);
					//in
					const finalF = [];
					arrFillfinal1.forEach((eloder) => {
						if (eloder.status == "unexpired") {
							if (eloder.PayStatus == 0) {
								finalF.push(innerRVunex(eloder));
							} else {
								finalF.push(innerRVunex1(eloder));
							}
						} else {
							if (eloder.PayStatus == 0) {
								finalF.push(innerRVex(eloder));
							} else {
								finalF.push(innerRVex1(eloder));
							}
						}
					});
					const innerListOder = document.querySelector(".js_innOder");
					innerListOder.innerHTML = finalF.join(" ");
					const listformU = document.querySelectorAll(".js_formCheckoke");
					listformU.forEach((formUp) => {
						formUp.addEventListener("submit", (e) => {
							// e.preventDefault();
							const arrCart = formUp.dataset.idform.split(",");
							const newCartamount = [];
							arrCart.forEach((acrt) => {
								const adBoook = books.find((bookk) => bookk.IDb == acrt);
								newCartamount.push(`${adBoook.IDb},${adBoook.amount}`);
							});
							formUp[6].value = newCartamount.join(";");
						});
					});
					const viewOs = document.querySelectorAll(".js_viewO");
					const modalO = document.querySelector(".js_modalview");
					const cntO = document.querySelector(".js_cntO");
					viewOs.forEach((view) => {
						view.addEventListener("click", () => {
							modalO.classList.add("showM");
							let listNameBooks = [];
							const Ooder = oders.find((Odd) => Odd.IDo == view.dataset.idoder);
							// console.log(Ooder);
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
					//show choose noti
					const iconchoose = document.querySelectorAll(".js_clickshownoti");
					iconchoose.forEach((icon) => {
						icon.addEventListener("click", () => {
							const bodyshow = document.getElementById(icon.dataset.idshow);
							bodyshow.classList.toggle("showchnoti");
						});
					});
					const allbodynoti = document.querySelectorAll(".js_body_choosenoti");
					const allclickshow = document.querySelectorAll(".js_shownotimessage");
					const subformexnoti = document.querySelectorAll(".js_subformexnoti");
					const bodyfullnotimassage = document.querySelector(
						".js_bodymodalnotimessage"
					);
					subformexnoti.forEach((subf) => {
						subf.addEventListener("click", () => {
							const submitformexnotices = document.getElementById(
								subf.dataset.idformex
							);
							submitformexnotices.click();
							allbodynoti.forEach((bdnoti) => {
								bdnoti.classList.remove("showchnoti");
							});
						});
					});
					allclickshow.forEach((aclickshow) => {
						aclickshow.addEventListener("click", () => {
							const formnotisubcreate =
								document.querySelector(".js_formcreatenoti");
							formnotisubcreate[0].value = aclickshow.dataset.idumessage;
							formnotisubcreate[1].value = aclickshow.dataset.idomessage;
							allbodynoti.forEach((bdnoti) => {
								bdnoti.classList.remove("showchnoti");
							});
							bodyfullnotimassage.classList.add("notiflex");
						});
					});
				});
			});

		return books;
	})
	// chartPie
	.then((books) => {
		const sumAllB = 10 * books.length;
		const numAmounts = books.map((book) => book.amount);
		let conNumB = numAmounts.reduce((sum, item) => sum + item);
		let notBumB = sumAllB - conNumB;
		Highcharts.chart("HighChartAllB", {
			colors: ["#01BAF2", "#dfb027"],
			chart: {
				type: "pie",
			},
			title: {
				text: '<p style="font-weight: 600;">Book inventory statistics</p>',
			},
			tooltip: {
				valueSuffix: "books",
			},
			subtitle: {
				text: "amount of books",
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: "pointer",
					dataLabels: {
						enabled: true,
						format: "{point.name} ",
					},
					showInLegend: true,
				},
			},
			series: [
				{
					name: "Quantity",
					colorByPoint: true,
					data: [
						{
							name: "Remaining",
							y: conNumB,
						},
						{
							name: "Unpaid",
							sliced: true,
							selected: true,
							y: notBumB,
						},
					],
				},
			],
		});
		const iconpies = document.querySelectorAll(".js_iconPie");
		const anchart = document.getElementById("HighChartAllB");
		const hienonechart = document.getElementById("HighChartOneB");
		iconpies.forEach((icpi) => {
			icpi.addEventListener("click", () => {
				anchart.classList.add("removechar");
				hienonechart.classList.add("disaddshowchar");
			});
		});
		iconpies.forEach((iconPie) => {
			iconPie.addEventListener("click", () => {
				const clamount = iconPie.dataset.amountb;
				const donamount = 10 - iconPie.dataset.amountb;
				const nametitle = iconPie.dataset.namepie;
				Highcharts.chart("HighChartOneB", {
					colors: ["#01BAF2", "#ff0000ad"],
					chart: {
						type: "pie",
					},
					title: {
						text: `<p style="font-weight: 600;">${nametitle}</p>`,
					},
					tooltip: {
						valueSuffix: "books",
					},
					subtitle: {
						text: "amount of books",
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: "pointer",
							dataLabels: {
								enabled: true,
								format: "{point.name} ",
							},
							showInLegend: true,
						},
					},
					series: [
						{
							name: "Quantity",
							colorByPoint: true,
							data: [
								{
									name: "Remaining",
									y: parseInt(clamount),
								},
								{
									name: "Unpaid",
									sliced: true,
									selected: true,
									y: parseInt(donamount),
								},
							],
						},
					],
				});
			});
		});
		return books;
	})
	// search file
	.then((books) => {
		const inputsfile = document.querySelector(".js_inputSFile");
		const innerSearchF = document.querySelector(".js_contentSF");
		const butDownload = document.querySelector(".js_downpdf");
		const butDownloadExcel = document.querySelector(".js_downexcel");
		const innerSearchEx = document.querySelector(".js_bodyexcelfile");
		inputsfile.addEventListener("change", () => {
			readXlsxFile(inputsfile.files[0]).then((rows) => {
				const listIDsearch = [];
				rows.forEach((row) => {
					listIDsearch.push(row.join(""));
				});
				const listBookSearchF = listIDsearch.map((idS) => {
					return books.find((bookkkk) => bookkkk.IDb == idS);
				});
				innerSearchF.innerHTML = listBookSearchF
					.map((booook) => innerBookSF(booook))
					.join(" ");
				innerSearchEx.innerHTML = listBookSearchF
					.map((boook) => innerBookexcel(boook))
					.join(" ");
				butDownload.addEventListener("click", () => {
					window.jsPDF = window.jspdf.jsPDF;
					let doc = new jsPDF();
					let elementHTML = document.querySelector("#contentToPrint");
					doc.html(elementHTML, {
						callback: function (doc) {
							// Save the PDF
							doc.save("books.pdf");
						},
						margin: [10, 10, 10, 10],
						autoPaging: "text",
						x: 0,
						y: 0,
						width: 190, //target width in the PDF document
						windowWidth: 1200, //window width in CSS pixels
					});
				});
				butDownloadExcel.addEventListener("click", (filename = "") => {
					let downloadLink;
					let dataType = "application/vnd.ms-excel";
					let tableSelect = document.getElementById("tblData");
					let tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");

					// Specify file name
					filename = "Books_data.xls";
					// Create download link element
					downloadLink = document.createElement("a");

					document.body.appendChild(downloadLink);

					if (navigator.msSaveOrOpenBlob) {
						var blob = new Blob(["\ufeff", tableHTML], {
							type: dataType,
						});
						navigator.msSaveOrOpenBlob(blob, filename);
					} else {
						// Create a link to the file
						downloadLink.href = "data:" + dataType + ", " + tableHTML;

						// Setting the file name
						downloadLink.download = filename;

						//triggering the function
						downloadLink.click();
					}
				});
			});
		});
		return books;
	})
	//filter
	.then((books) => {
		fetch("http://localhost:3000/api/v1/categories")
			.then((res) => res.json())
			.then((categories) => {
				const fillfic = document.querySelector(".js_fillfic");
				const fillyear = document.querySelector(".js_fillyear");
				let innerfilFic = categories.map(
					(cate) => `<option value="${cate.IDc}">${cate.NameC}</option>`
				);
				innerfilFic.unshift(`<option value="all">All</option>`);
				fillfic.innerHTML = innerfilFic.join(" ");
				const fyear = books.map((book) => book.YearPub);
				const filyear = [...new Set(fyear)].sort();
				const innerfilyear = filyear.map(
					(fy) => `<option value="${fy}">${fy}</option>`
				);
				innerfilyear.unshift(`<option value="all">All</option>`);
				fillyear.innerHTML = innerfilyear.join(" ");

				//sub
				fetch("http://localhost:3000/api/v1/book_category")
					.then((res) => res.json())
					.then((Bcategory) => {
						const subfill = document.querySelector(".js_subfill");
						subfill.addEventListener("click", () => {
							let Bfilcate = [];
							if (fillfic.value != "all") {
								Bfilcate = Bcategory.filter(
									(bcat) => bcat.IDc == fillfic.value
								);
							} else {
								Bfilcate = Bcategory.map((ct) => ct);
							}
							const bookcate = Bfilcate.map((bct) =>
								books.find((book) => book.IDb == bct.IDb)
							);
							let newfilterB = bookcate;
							if (fillyear.value != "all") {
								newfilterB = bookcate.filter(
									(bok) => bok.YearPub == fillyear.value
								);
							}
							innerRenB.innerHTML = newfilterB
								.map((newBo) => renderBook(newBo))
								.join(" ");
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
							const banner = document.querySelector(".js_banner");
							const butNo = document.querySelector(".js_no");
							const bodybanner = document.querySelector(".bodybanner");
							const butYes = document.querySelector(".js_yes");
							listdelete.forEach((icondele) => {
								icondele.addEventListener("click", () => {
									banner.setAttribute("style", "display: flex;");
									butYes.setAttribute(
										"data-idfyes",
										`${icondele.dataset.iddelete}`
									);
								});
							});
							butNo.addEventListener("click", () => {
								banner.removeAttribute("style");
							});
							banner.addEventListener("click", () => {
								banner.removeAttribute("style");
							});
							bodybanner.addEventListener("click", (e) => {
								e.stopPropagation();
							});
							butYes.addEventListener("click", () => {
								document.getElementById(butYes.dataset.idfyes).click();
							});
							const iconpies = document.querySelectorAll(".js_iconPie");
							iconpies.forEach((iconPie) => {
								iconPie.addEventListener("click", () => {
									const clamount = iconPie.dataset.amountb;
									const donamount = 10 - iconPie.dataset.amountb;
									const nametitle = iconPie.dataset.namepie;
									Highcharts.chart("HighChartOneB", {
										colors: ["#01BAF2", "#ff0000ad"],
										chart: {
											type: "pie",
										},
										title: {
											text: `<p style="font-weight: 600;">${nametitle}</p>`,
										},
										tooltip: {
											valueSuffix: "books",
										},
										subtitle: {
											text: "amount of books",
										},
										plotOptions: {
											pie: {
												allowPointSelect: true,
												cursor: "pointer",
												dataLabels: {
													enabled: true,
													format: "{point.name} ",
												},
												showInLegend: true,
											},
										},
										series: [
											{
												name: "Quantity",
												colorByPoint: true,
												data: [
													{
														name: "Remaining",
														y: parseInt(clamount),
													},
													{
														name: "Unpaid",
														sliced: true,
														selected: true,
														y: parseInt(donamount),
													},
												],
											},
										],
									});
								});
							});
						});
					});
			});
	});

const formAddB = document.querySelector(".js_formAddBook");
const inputImgA = document.getElementById("inputImg");
inputImgA.addEventListener("change", () => {
	formAddB.setAttribute("action", "/reate-new-book-image");
	formAddB.setAttribute("enctype", "multipart/form-data");
});

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

const funedit = document.querySelector(".js_showedit");
const closeEdit = document.querySelector(".js_closeE");
const bodyeditt = document.querySelector(".bodyedit");
closeEdit.addEventListener("click", () => {
	funedit.setAttribute("style", "display: none;");
});
funedit.addEventListener("click", () => {
	funedit.setAttribute("style", "display: none;");
});
bodyeditt.addEventListener("click", (e) => {
	e.stopPropagation();
});

const funaddbooks = document.querySelector(".js_showAddbook");
const cloaddbook = document.querySelector(".js_deadd");
const reab = document.querySelector(".js_remAB");
funaddbooks.addEventListener("click", () => {
	funaddbooks.classList.toggle("boderFun");
	document
		.querySelector(`.${funaddbooks.dataset.setsr}`)
		.classList.toggle("disflex");
});
cloaddbook.addEventListener("click", () => {
	reab.classList.remove("disflex");
	funaddbooks.classList.remove("boderFun");
});
// const inAddbooks = document.querySelectorAll(".js_showAB");

// const rea = document.querySelector(".js_reb");

// funaddbooks.forEach((fun) => {
// 	fun.addEventListener("click", () => {
// 		funaddbooks.forEach((funD) => {
// 			funD.classList.remove("boderFun");
// 		});
// 		fun.classList.add("boderFun");
// 		inAddbooks.forEach((inAddbook) => {
// 			inAddbook.classList.remove("disflex");
// 		});
// 		document.querySelector(`.${fun.dataset.setsr}`).classList.add("disflex");
// 	});
// });

const gridOptions = {
	// each entry here represents one column
	columnDefs: [
		{ field: "Stt" },
		{ field: "Account" },
		{ field: "FullName" },
		{ field: "Old" },
		{ field: "Address" },
	],

	// default col def properties get applied to all columns
	defaultColDef: { sortable: true, filter: true },

	rowSelection: "multiple", // allow rows to be selected
	animateRows: true, // have rows animate to new positions when sorted

	// example event handler
	//  onCellClicked: params => {
	//    console.log('cell was clicked', params)
	//  }
};

const eGridDiv = document.getElementById("myGrid");
new agGrid.Grid(eGridDiv, gridOptions);

// Fetch data from server
fetch("http://localhost:3000/api/v1/users")
	.then((response) => response.json())
	.then((users) => {
		const newUser = users.map((user, index) => {
			return {
				Stt: index,
				Account: user.Email,
				FullName: user.FullName,
				Old: user.Old,
				Address: user.Addr,
			};
		});
		gridOptions.api.setRowData(newUser);
	});

//dthu
fetch("http://localhost:3000/api/v1/oders")
	.then((response) => response.json())
	.then((oders) => {
		const inpdthu = document.querySelector(".js_inpdthu");
		const butdthu = document.querySelector(".js_butdthu");
		const innerRevenue = document.querySelector(".js_inner_revenue");
		const innerNumren = document.querySelector(".js_inner_numRen");
		const innernumPai = document.querySelector(".js_inner_numPai");
		const innerPenfee = document.querySelector(".js_inner_penfee");
		const innerNameMonth = document.querySelector(".js_name_month");
		butdthu.addEventListener("click", () => {
			let dtyear = inpdthu.value.slice(0, 4);
			let dtmonth = inpdthu.value.slice(5, 7);
			const oderyear = oders.filter(
				(oder) => oder.DateRental.slice(6, 10) == dtyear
			);
			const oderfinal = oderyear.filter(
				(odyear) => odyear.DateRental.slice(3, 5) == dtmonth
			);
			let numrental = oderfinal.length;
			let revenue = 0;
			let priceFinal = 0;
			oderfinal.forEach((odfinal) => {
				let priceV = odfinal.Cart.split(",").length * 0.5;
				let namPay = odfinal.DatePay.slice(6, 10);
				let namRen = odfinal.DateRental.slice(6, 10);
				let thangPay = parseInt(odfinal.DatePay.slice(3, 5));
				let thangRen = parseInt(odfinal.DateRental.slice(3, 5));
				let ngayPay = parseInt(odfinal.DatePay.slice(0, 2));
				let ngayRen = parseInt(odfinal.DateRental.slice(0, 2));
				if (namPay - namRen == 0) {
					if (thangPay - thangRen == 0) {
						let songay = ngayPay - ngayRen;
						let priceaV = songay * priceV;
						priceFinal += priceaV;
					} else {
						let songay = (thangPay - thangRen) * 30 + ngayPay - ngayRen;
						let priceaV = songay * priceV;
						priceFinal += priceaV;
					}
				}
				// console.log(odfinal);
				// console.log(priceV);
			});
			const unpadRoder = oderfinal.filter((of) => of.PayStatus == 0);
			let unpaidRen = unpadRoder.length;
			let homnay = new Date();
			let thangnay = homnay.getMonth() + 1;
			let ngaynay = homnay.getDate();
			let priceFPena = 0;
			unpadRoder.forEach((upOder) => {
				let priceaVou = upOder.Cart.split(",").length * 0.6;
				let namtreP = upOder.DatePay.slice(6, 10);
				let thangtreP = parseInt(upOder.DatePay.slice(3, 5));
				let ngaytreP = parseInt(upOder.DatePay.slice(0, 2));
				if (homnay.getFullYear() - namtreP == 0) {
					if (thangnay - thangtreP == 0) {
						let songayPai = ngaynay - ngaytreP;
						let pricePai = songayPai * priceaVou;
						priceFPena += pricePai;
					} else {
						let songayPai = (thangnay - thangtreP) * 31 + ngaynay - ngaytreP;
						let pricePai = songayPai * priceaVou;
						priceFPena += pricePai;
					}
				}
			});
			innerRevenue.innerHTML = `$ ${priceFinal.toFixed(2)}`;
			innerNumren.innerHTML = `${numrental}`;
			innernumPai.innerHTML = `${unpaidRen}`;
			innerPenfee.innerHTML = `$ ${priceFPena.toFixed(2)}`;
			let nameMonth = "October";
			switch (dtmonth) {
				case "01":
					nameMonth = "January";
					break;
				case "02":
					nameMonth = "February";
					break;
				case "03":
					nameMonth = "March";
					break;
				case "04":
					nameMonth = "April";
					break;
				case "05":
					nameMonth = "May";
					break;
				case "06":
					nameMonth = "June";
					break;
				case "07":
					nameMonth = "July";
					break;
				case "08":
					nameMonth = "August";
					break;
				case "09":
					nameMonth = "September";
					break;
				case "10":
					nameMonth = "October";
					break;
				case "11":
					nameMonth = "November";
					break;
				case "12":
					nameMonth = "December";
					break;
			}
			innerNameMonth.innerHTML = `${nameMonth} revenue statistics`;
		});
	});

//categories
const formcate = document.querySelector(".js_form_addcate");
formcate.addEventListener("submit", (e) => {
	if (formcate[0].value) {
		formcate[1].value = random(3);
	} else {
		window.alert("no empty!");
		e.preventDefault();
	}
});

fetch("http://localhost:3000/api/v1/categories")
	.then((res) => res.json())
	.then((categories) => {
		const inputcate = document.getElementById("inputcate");
		const innerCateinput = categories.map(
			(cate) => `<option value="${cate.IDc}">${cate.NameC}</option>`
		);
		inputcate.innerHTML = innerCateinput.join(" ");
		return categories;
	})
	.then((categories) => {
		const contentcategory = document.querySelector(".js_tablecate");
		const innerCate = categories.map((cate) => innercategories(cate));
		contentcategory.innerHTML = innerCate.join(" ");
		const bodyban = document.querySelector(".js_showban");
		const buthuyban = document.querySelector(".js_huyshowban");
		const contentban = document.querySelector(".js_contentban");
		const butshowban = document.querySelectorAll(".js_but_dele_ban");
		const okedelete = document.querySelector(".js_oke_delete");
		butshowban.forEach((butdele) => {
			butdele.addEventListener("click", () => {
				bodyban.classList.add("bandele");
				okedelete.setAttribute(
					"data-idformdele",
					`dele-${butdele.dataset.idbancate}`
				);
			});
		});
		buthuyban.addEventListener("click", () => {
			bodyban.classList.remove("bandele");
		});
		bodyban.addEventListener("click", () => {
			bodyban.classList.remove("bandele");
		});
		contentban.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		okedelete.addEventListener("click", () => {
			const suboke = document.getElementById(okedelete.dataset.idformdele);
			suboke.click();
		});

		const editcates = document.querySelectorAll(".js_editcate");
		const titlecateup = document.querySelector(".js_titlecateupdate");
		const formeditcate = document.querySelector(".js_form_edit");
		const canceledits = document.querySelectorAll(".js_ccedit");
		const bodycate = document.querySelector(".js_bodyeditcate");
		const formsubupcate = document.querySelector(".js_formsubupcate");
		editcates.forEach((editcate) => {
			editcate.addEventListener("click", () => {
				titlecateup.innerHTML = `${editcate.dataset.namecate} <i class='bx bxs-hand-down'></i>`;
				formeditcate.classList.add("disedit");
				formsubupcate[0].value = editcate.dataset.idcate;
			});
		});
		canceledits.forEach((canceledit) => {
			canceledit.addEventListener("click", () => {
				formeditcate.classList.remove("disedit");
			});
		});
		bodycate.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		formsubupcate.addEventListener("submit", (e) => {
			if (formsubupcate[1].value) {
			} else {
				window.alert("no empty!");
				e.preventDefault();
			}
		});
	});

//feedback
const tableFeedback = document.querySelector(".js_list_feedback");
fetch("http://localhost:3000/api/v1/feedback")
	.then((res) => res.json())
	.then((feedbacks) => {
		tableFeedback.innerHTML = feedbacks
			.map((feedb) => innerfeedback(feedb))
			.join(" ");

		const iconmails = document.querySelectorAll(".js_iconmail");
		const formsendmail = document.querySelector(".js_formsendmail");
		const cancelmail = document.querySelector(".js_ccsendmail");
		const bodysendmail = document.querySelector(".js_bodysendmail");
		const mailto = document.querySelector(".js_titleemail");
		const submitsendmail = document.getElementById("submitsendmail");
		const messageSendmail = document.getElementById("messagemail");
		iconmails.forEach((iconmail) => {
			iconmail.addEventListener("click", () => {
				formsendmail.classList.add("mailflex");
				mailto.innerHTML = iconmail.dataset.mailto;
				submitsendmail.setAttribute("data-mailsend", iconmail.dataset.mailto);
			});
		});
		cancelmail.addEventListener("click", () => {
			formsendmail.classList.remove("mailflex");
		});
		formsendmail.addEventListener("click", () => {
			formsendmail.classList.remove("mailflex");
		});
		bodysendmail.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		submitsendmail.addEventListener("click", () => {
			Email.send({
				SecureToken: "b18110c7-500f-465f-8968-7ae866a561fa",
				Password: "8A0841320B0C87879AB7881739FF1D5AC931",
				To: submitsendmail.dataset.mailsend,
				From: "tamb1812301@student.ctu.edu.vn",
				Subject: "Reply to feedback",
				Body: messageSendmail.value,
			}).then((message) => alert("mail sent successfully!"));
			formsendmail.classList.remove("mailflex");
			messageSendmail.value = " ";
		});

		//delete feedback
		const icondelefbs = document.querySelectorAll(".js_icondelefeedback");
		const formdelefb = document.querySelector(".js_formdelefb");
		const huydele = document.querySelector(".js_fbhuy");
		const bodydefb = document.querySelector(".js_bodydelefb");
		const okedefb = document.querySelector(".js_fboke");
		icondelefbs.forEach((icfb) => {
			icfb.addEventListener("click", () => {
				formdelefb.classList.add("deleflex");
				okedefb.setAttribute("data-docdbdele", `fb-${icfb.dataset.idfeedback}`);
			});
		});
		huydele.addEventListener("click", () => {
			formdelefb.classList.remove("deleflex");
		});
		formdelefb.addEventListener("click", () => {
			formdelefb.classList.remove("deleflex");
		});
		bodydefb.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		okedefb.addEventListener("click", () => {
			let subfdele = document.getElementById(okedefb.dataset.docdbdele);
			subfdele.click();
		});
	});

//noti message
const bodyfullnotimassage = document.querySelector(".js_bodymodalnotimessage");
const cancelnoti = document.querySelector(".js_cancel_notimessage");
const contentbodynoti = document.querySelector(".js_bodycontentnotimessage");
cancelnoti.addEventListener("click", () => {
	bodyfullnotimassage.classList.remove("notiflex");
});
bodyfullnotimassage.addEventListener("click", () => {
	bodyfullnotimassage.classList.remove("notiflex");
});
contentbodynoti.addEventListener("click", (e) => {
	e.stopPropagation();
});
const formnotisubcreate = document.querySelector(".js_formcreatenoti");
formnotisubcreate.addEventListener("submit", (e) => {
	if (!formnotisubcreate[2].value) {
		window.alert("Title cannot be empty!");
		e.preventDefault();
	} else {
		if (!formnotisubcreate[3].value) {
			window.alert("The content must not be empty!");
			e.preventDefault();
		} else {
			bodyfullnotimassage.classList.remove("notiflex");
			window.alert("Send successful message");
		}
	}
});
