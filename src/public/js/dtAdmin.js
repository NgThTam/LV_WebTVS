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
				<td>${oder.IDo}</td>
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
                                    </form></td>
			</tr>`;
};
const innerRVex1 = (oder) => {
	return `<tr>
				<td>${oder.IDo}</td>
				<td>${oder.User.FullName}</td>
				<td>${oder.lenghtCart}</td>
				<td>${oder.DateRental}</td>
				<td>${oder.DatePay}</td>
				<td><div class="status"><p class="exD">expired</p></div></td>
				<td><i class='bx bxs-show divi js_viewO' data-idoder="${oder.IDo}"></i></td>
				<td><i class='bx bx-check-circle'></i></td>
			</tr>`;
};
const innerRVunex = (oder) => {
	return `<tr>
				<td>${oder.IDo}</td>
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
			</tr>`;
};
const innerRVunex1 = (oder) => {
	return `<tr>
				<td>${oder.IDo}</td>
				<td>${oder.User.FullName}</td>
				<td>${oder.lenghtCart}</td>
				<td>${oder.DateRental}</td>
				<td>${oder.DatePay}</td>
				<td><div class="status"><p class="unexD">unexpired</p></div></td>
				<td><i class='bx bxs-show divi js_viewO' data-idoder="${oder.IDo}"></i></td>
				<td><i class='bx bx-check-circle'></i></td>
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

fetch("http://localhost:3000/api/v1/users")
	.then((res) => res.json())
	.then((users) => {
		const innerrenUser = document.querySelector(".js_renderUser");
		const listUser = [];
		users.forEach((user, index) => {
			listUser.push(renderUser(user, index));
		});
		innerrenUser.innerHTML = listUser.join(" ");
		const mails = document.querySelectorAll(".js_iconmail");
		mails.forEach((mail) => {
			mail.addEventListener("click", () => {
				window.open(`mailto:${mail.dataset.emailu}`);
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
			listdelete.forEach((icondele) => {
				icondele.addEventListener("click", () => {
					document.getElementById(icondele.dataset.iddelete).click();
				});
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
		listdelete.forEach((icondele) => {
			icondele.addEventListener("click", () => {
				document.getElementById(icondele.dataset.iddelete).click();
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
		return books;
	})
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

const formAddB = document.querySelector(".js_formAddBook");
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

const funaddbook = document.querySelector(".js_showAddbook");
const inAddbook = document.querySelector(".js_showAB");
funaddbook.addEventListener("click", () => {
	inAddbook.classList.toggle("disflex");
	funaddbook.classList.toggle("boderFun");
});
const funedit = document.querySelector(".js_showedit");
const closeEdit = document.querySelector(".js_closeE");
closeEdit.addEventListener("click", () => {
	funedit.setAttribute("style", "display: none;");
});
