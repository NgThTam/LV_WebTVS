const showBook = document.getElementById("js_show_book");
const showBook2 = document.getElementById("js_show_book2");
const showBook3 = document.getElementById("js_show_book3");
const filterY = function (books, year) {
	return books.filter((book) => book.YearPub == year);
};
const filterX = (books, publiser) =>
	books.filter((book) => book.Publiser === publiser);

const filterA = (books, author) =>
	books.filter((book) => book.Author === author);

const renderBook = (book) => {
	return `<div id="${book.IDb}" class="books_abook">
				<div class="abook_image">
					<img src="${book.ImgB}" alt="" class="abook_img">
					<div class="abook_img_ho">
						<a data-id="${book.IDb}" class="js_lbk" href="/detail"><i data-id="${book.IDb}" class='bx bx-show'></i></a>
						<a href="#" class="a2 js_likeB" data-idb="${book.IDb}"><i class='bx bx-heart '></i></a>
					</div>
				</div>
				<div class="abook_inf">
					<a href="" style="cursor: default" class="title_book">${book.NameB}</a>
					<form action="#" class="js_formlikes" data-idbook = "${book.IDb}" id="Get${book.IDb}" hidden>
						<input type="text" name="Idu" id="" value="">
						<input type="text" name="listBlike" id="" value="">
						<button type="submit" id="Sub${book.IDb}"></button>
					</form>
					<div class="aut_book">By: <span>${book.Author}</span></div>
				</div>
			</div>`;
};
const filterStar = (books, start, end) =>
	books.filter((book) => book.avgStars > start && book.avgStars <= end);
const filterStar1 = (books, start, end) =>
	books.filter((book) => book.avgStars >= start && book.avgStars < end);

fetch("http://localhost:3000/api/v1/books")
	.then((Response) => Response.json())
	.then((books) => {
		const newListBook = [];
		const newListBook2 = [];
		const newListBook3 = [];
		books.forEach((book, ind) => {
			if (ind < 12) {
				newListBook.push(book);
			} else if (ind < 24) {
				newListBook2.push(book);
			} else if (ind < 36) {
				newListBook3.push(book);
			}
		});
		const abook = newListBook.map((book) => {
			return renderBook(book);
		});
		const abook2 = newListBook2.map((book) => {
			return renderBook(book);
		});
		const abook3 = newListBook3.map((book) => {
			return renderBook(book);
		});
		showBook.innerHTML = abook.join(" ");
		showBook2.innerHTML = abook2.join(" ");
		showBook3.innerHTML = abook3.join(" ");
		return books;
	})
	.then((ab) => {
		const abooks = document.querySelectorAll(".js_lbk");
		abooks.forEach((abook) => {
			abook.addEventListener("click", (e) => {
				localStorage.setItem("id_book", e.target.dataset.id);
			});
		});
		return ab;
	})
	.then((ab) => {
		//show all
		const bookAll = document.querySelector(".js_all");
		bookAll.addEventListener("click", () => {
			const newbooksAll = [];
			ab.forEach((booka, index) => {
				if (index < 12) {
					newbooksAll.push(booka);
				}
			});
			const booksAll = newbooksAll.map((book) => {
				return renderBook(book);
			});
			showBook.innerHTML = booksAll.join(" ");
			const abooks = document.querySelectorAll(".js_lbk");
			abooks.forEach((abook) => {
				abook.addEventListener("click", (e) => {
					localStorage.setItem("id_book", e.target.dataset.id);
				});
			});
			//like book
			fetch("http://localhost:3000/api/v1/likes")
				.then((res) => res.json())
				.then((likes) => {
					const likebooks = document.querySelectorAll(".js_likeB");
					const formlikes = document.querySelectorAll(".js_formlikes");
					const iduser = localStorage.getItem("IDuser");
					if (iduser) {
						const userL = likes.find((like) => like.IDu == iduser);
						if (userL) {
							formlikes.forEach((flike) => {
								flike.setAttribute("action", "/update-listlike");
								flike.setAttribute("method", "POST");
								flike[0].value = iduser;
								// flike.addEventListener("submit", (e) => {
								// 	e.preventDefault();
								// });
							});
							const listNewBLike = userL.ListBook.split(",");
							likebooks.forEach((ilike) => {
								ilike.addEventListener("click", () => {
									const formLikeID = document.getElementById(
										`Get${ilike.dataset.idb}`
									);
									listNewBLike.push(ilike.dataset.idb);
									console.log(ilike.dataset.idb);
									const listBookNewO = [...new Set(listNewBLike)];
									formLikeID[1].value = listBookNewO.join(",");
								});
							});
						} else {
							formlikes.forEach((like) => {
								like.setAttribute("action", "/reate-listlike");
								like.setAttribute("method", "POST");
								like[0].value = iduser;
							});
							likebooks.forEach((ilike) => {
								ilike.addEventListener("click", () => {
									const formLikeID = document.getElementById(
										`Get${ilike.dataset.idb}`
									);
									formLikeID[1].value = ilike.dataset.idb;
								});
							});
						}
					} else {
						formlikes.forEach((flike) => {
							flike.addEventListener("submit", (e) => {
								e.preventDefault();
								window.alert("Pls Login");
							});
						});
					}
					likebooks.forEach((like) => {
						like.addEventListener("click", () => {
							document.getElementById(`Sub${like.dataset.idb}`).click();
						});
					});
				});
		});
		//show yearpub
		const textYear = document.querySelectorAll(".js_year_pub span a");
		textYear.forEach((y) => {
			y.addEventListener("click", (e) => {
				const newBooks = filterY(ab, y.innerText);
				const newListB = [];
				newBooks.forEach((book, indx) => {
					if (indx < 12) {
						newListB.push(book);
					}
				});
				const abook = newListB.map((newbook) => {
					return renderBook(newbook);
				});
				showBook.innerHTML = abook.join(" ");
				const abooks = document.querySelectorAll(".js_lbk");
				abooks.forEach((abook) => {
					abook.addEventListener("click", (e) => {
						localStorage.setItem("id_book", e.target.dataset.id);
					});
				});
				//like book
				fetch("http://localhost:3000/api/v1/likes")
					.then((res) => res.json())
					.then((likes) => {
						const likebooks = document.querySelectorAll(".js_likeB");
						const formlikes = document.querySelectorAll(".js_formlikes");
						const iduser = localStorage.getItem("IDuser");
						if (iduser) {
							const userL = likes.find((like) => like.IDu == iduser);
							if (userL) {
								formlikes.forEach((flike) => {
									flike.setAttribute("action", "/update-listlike");
									flike.setAttribute("method", "POST");
									flike[0].value = iduser;
									// flike.addEventListener("submit", (e) => {
									// 	e.preventDefault();
									// });
								});
								const listNewBLike = userL.ListBook.split(",");
								likebooks.forEach((ilike) => {
									ilike.addEventListener("click", () => {
										const formLikeID = document.getElementById(
											`Get${ilike.dataset.idb}`
										);
										listNewBLike.push(ilike.dataset.idb);
										console.log(ilike.dataset.idb);
										const listBookNewO = [...new Set(listNewBLike)];
										formLikeID[1].value = listBookNewO.join(",");
									});
								});
							} else {
								formlikes.forEach((like) => {
									like.setAttribute("action", "/reate-listlike");
									like.setAttribute("method", "POST");
									like[0].value = iduser;
								});
								likebooks.forEach((ilike) => {
									ilike.addEventListener("click", () => {
										const formLikeID = document.getElementById(
											`Get${ilike.dataset.idb}`
										);
										formLikeID[1].value = ilike.dataset.idb;
									});
								});
							}
						} else {
							formlikes.forEach((flike) => {
								flike.addEventListener("submit", (e) => {
									e.preventDefault();
									window.alert("Pls Login");
								});
							});
						}
						likebooks.forEach((like) => {
							like.addEventListener("click", () => {
								document.getElementById(`Sub${like.dataset.idb}`).click();
							});
						});
					});
			});
		});
		//show publiser
		const publisers = document.querySelectorAll(".js_content_pub span a");
		publisers.forEach((pub) => {
			pub.addEventListener("click", () => {
				const newPubs = filterX(ab, pub.innerText);
				const abook = newPubs.map((newpub) => {
					return renderBook(newpub);
				});
				showBook.innerHTML = abook.join(" ");
				const abooks = document.querySelectorAll(".js_lbk");
				abooks.forEach((abook) => {
					abook.addEventListener("click", (e) => {
						localStorage.setItem("id_book", e.target.dataset.id);
					});
				});
				//like book
				fetch("http://localhost:3000/api/v1/likes")
					.then((res) => res.json())
					.then((likes) => {
						const likebooks = document.querySelectorAll(".js_likeB");
						const formlikes = document.querySelectorAll(".js_formlikes");
						const iduser = localStorage.getItem("IDuser");
						if (iduser) {
							const userL = likes.find((like) => like.IDu == iduser);
							if (userL) {
								formlikes.forEach((flike) => {
									flike.setAttribute("action", "/update-listlike");
									flike.setAttribute("method", "POST");
									flike[0].value = iduser;
									// flike.addEventListener("submit", (e) => {
									// 	e.preventDefault();
									// });
								});
								const listNewBLike = userL.ListBook.split(",");
								likebooks.forEach((ilike) => {
									ilike.addEventListener("click", () => {
										const formLikeID = document.getElementById(
											`Get${ilike.dataset.idb}`
										);
										listNewBLike.push(ilike.dataset.idb);
										console.log(ilike.dataset.idb);
										const listBookNewO = [...new Set(listNewBLike)];
										formLikeID[1].value = listBookNewO.join(",");
									});
								});
							} else {
								formlikes.forEach((like) => {
									like.setAttribute("action", "/reate-listlike");
									like.setAttribute("method", "POST");
									like[0].value = iduser;
								});
								likebooks.forEach((ilike) => {
									ilike.addEventListener("click", () => {
										const formLikeID = document.getElementById(
											`Get${ilike.dataset.idb}`
										);
										formLikeID[1].value = ilike.dataset.idb;
									});
								});
							}
						} else {
							formlikes.forEach((flike) => {
								flike.addEventListener("submit", (e) => {
									e.preventDefault();
									window.alert("Pls Login");
								});
							});
						}
						likebooks.forEach((like) => {
							like.addEventListener("click", () => {
								document.getElementById(`Sub${like.dataset.idb}`).click();
							});
						});
					});
			});
		});
		//show author
		const authors = document.querySelectorAll(".js_author li a");
		authors.forEach((author) => {
			author.addEventListener("click", () => {
				const newAuthors = filterA(ab, author.innerText);
				const abook = newAuthors.map((newAuthor) => {
					return renderBook(newAuthor);
				});
				showBook.innerHTML = abook.join(" ");
				const abooks = document.querySelectorAll(".js_lbk");
				abooks.forEach((abook) => {
					abook.addEventListener("click", (e) => {
						localStorage.setItem("id_book", e.target.dataset.id);
					});
				});
				//like book
				fetch("http://localhost:3000/api/v1/likes")
					.then((res) => res.json())
					.then((likes) => {
						const likebooks = document.querySelectorAll(".js_likeB");
						const formlikes = document.querySelectorAll(".js_formlikes");
						const iduser = localStorage.getItem("IDuser");
						if (iduser) {
							const userL = likes.find((like) => like.IDu == iduser);
							if (userL) {
								formlikes.forEach((flike) => {
									flike.setAttribute("action", "/update-listlike");
									flike.setAttribute("method", "POST");
									flike[0].value = iduser;
									// flike.addEventListener("submit", (e) => {
									// 	e.preventDefault();
									// });
								});
								const listNewBLike = userL.ListBook.split(",");
								likebooks.forEach((ilike) => {
									ilike.addEventListener("click", () => {
										const formLikeID = document.getElementById(
											`Get${ilike.dataset.idb}`
										);
										listNewBLike.push(ilike.dataset.idb);
										console.log(ilike.dataset.idb);
										const listBookNewO = [...new Set(listNewBLike)];
										formLikeID[1].value = listBookNewO.join(",");
									});
								});
							} else {
								formlikes.forEach((like) => {
									like.setAttribute("action", "/reate-listlike");
									like.setAttribute("method", "POST");
									like[0].value = iduser;
								});
								likebooks.forEach((ilike) => {
									ilike.addEventListener("click", () => {
										const formLikeID = document.getElementById(
											`Get${ilike.dataset.idb}`
										);
										formLikeID[1].value = ilike.dataset.idb;
									});
								});
							}
						} else {
							formlikes.forEach((flike) => {
								flike.addEventListener("submit", (e) => {
									e.preventDefault();
									window.alert("Pls Login");
								});
							});
						}
						likebooks.forEach((like) => {
							like.addEventListener("click", () => {
								document.getElementById(`Sub${like.dataset.idb}`).click();
							});
						});
					});
			});
		});
		//show star
		fetch("http://localhost:3000/api/v1/ratings")
			.then((res) => res.json())
			.then((ratings) => {
				const newBookList = ab.map((book) => {
					const listBookById = ratings.filter(
						(rating) => rating.IDb === book.IDb
					);

					const avgStars =
						listBookById.reduce((sum, curr) => sum + curr.Star, 0) /
						listBookById.length;
					return { ...book, avgStars };
				});
				const clickStars = document.querySelectorAll(".js_menu_ratings > li");
				clickStars.forEach((clickstar) => {
					clickstar.addEventListener("click", () => {
						const fstar = clickstar.dataset.star;
						let newStars = [];
						if (fstar == 2) {
							newStars = filterStar1(newBookList, 0, 2);
						} else {
							newStars = filterStar(newBookList, fstar - 2, fstar);
						}
						const abook = newStars.map((newStar) => {
							return renderBook(newStar);
						});
						showBook.innerHTML = abook.join(" ");
						const abooks = document.querySelectorAll(".js_lbk");
						abooks.forEach((abook) => {
							abook.addEventListener("click", (e) => {
								localStorage.setItem("id_book", e.target.dataset.id);
							});
						});
						//like book
						fetch("http://localhost:3000/api/v1/likes")
							.then((res) => res.json())
							.then((likes) => {
								const likebooks = document.querySelectorAll(".js_likeB");
								const formlikes = document.querySelectorAll(".js_formlikes");
								const iduser = localStorage.getItem("IDuser");
								if (iduser) {
									const userL = likes.find((like) => like.IDu == iduser);
									if (userL) {
										formlikes.forEach((flike) => {
											flike.setAttribute("action", "/update-listlike");
											flike.setAttribute("method", "POST");
											flike[0].value = iduser;
											// flike.addEventListener("submit", (e) => {
											// 	e.preventDefault();
											// });
										});
										const listNewBLike = userL.ListBook.split(",");
										likebooks.forEach((ilike) => {
											ilike.addEventListener("click", () => {
												const formLikeID = document.getElementById(
													`Get${ilike.dataset.idb}`
												);
												listNewBLike.push(ilike.dataset.idb);
												console.log(ilike.dataset.idb);
												const listBookNewO = [...new Set(listNewBLike)];
												formLikeID[1].value = listBookNewO.join(",");
											});
										});
									} else {
										formlikes.forEach((like) => {
											like.setAttribute("action", "/reate-listlike");
											like.setAttribute("method", "POST");
											like[0].value = iduser;
										});
										likebooks.forEach((ilike) => {
											ilike.addEventListener("click", () => {
												const formLikeID = document.getElementById(
													`Get${ilike.dataset.idb}`
												);
												formLikeID[1].value = ilike.dataset.idb;
											});
										});
									}
								} else {
									formlikes.forEach((flike) => {
										flike.addEventListener("submit", (e) => {
											e.preventDefault();
											window.alert("Pls Login");
										});
									});
								}
								likebooks.forEach((like) => {
									like.addEventListener("click", () => {
										document.getElementById(`Sub${like.dataset.idb}`).click();
									});
								});
							});
					});
				});
			});
		return ab;
	})
	.then((ab) => {
		const boxSearch = document.getElementById("boxsearch");
		boxSearch.addEventListener("keyup", () => {
			let Textvalue = boxSearch.value.toUpperCase();
			// console.log(Textvalue);
			const re = new RegExp(`${Textvalue}`);
			const newSearch = [];
			ab.forEach((book) => {
				let textname = book.NameB.toUpperCase();
				if (re.test(textname)) {
					newSearch.push(book);
				}
			});
			const abook = newSearch.map((book) => {
				return renderBook(book);
			});
			showBook.innerHTML = abook.join(" ");
			const abooks = document.querySelectorAll(".js_lbk");
			abooks.forEach((abook) => {
				abook.addEventListener("click", (e) => {
					localStorage.setItem("id_book", e.target.dataset.id);
				});
			});
			//like book
			fetch("http://localhost:3000/api/v1/likes")
				.then((res) => res.json())
				.then((likes) => {
					const likebooks = document.querySelectorAll(".js_likeB");
					const formlikes = document.querySelectorAll(".js_formlikes");
					const iduser = localStorage.getItem("IDuser");
					if (iduser) {
						const userL = likes.find((like) => like.IDu == iduser);
						if (userL) {
							formlikes.forEach((flike) => {
								flike.setAttribute("action", "/update-listlike");
								flike.setAttribute("method", "POST");
								flike[0].value = iduser;
								// flike.addEventListener("submit", (e) => {
								// 	e.preventDefault();
								// });
							});
							const listNewBLike = userL.ListBook.split(",");
							likebooks.forEach((ilike) => {
								ilike.addEventListener("click", () => {
									const formLikeID = document.getElementById(
										`Get${ilike.dataset.idb}`
									);
									listNewBLike.push(ilike.dataset.idb);
									console.log(ilike.dataset.idb);
									const listBookNewO = [...new Set(listNewBLike)];
									formLikeID[1].value = listBookNewO.join(",");
								});
							});
						} else {
							formlikes.forEach((like) => {
								like.setAttribute("action", "/reate-listlike");
								like.setAttribute("method", "POST");
								like[0].value = iduser;
							});
							likebooks.forEach((ilike) => {
								ilike.addEventListener("click", () => {
									const formLikeID = document.getElementById(
										`Get${ilike.dataset.idb}`
									);
									formLikeID[1].value = ilike.dataset.idb;
								});
							});
						}
					} else {
						formlikes.forEach((flike) => {
							flike.addEventListener("submit", (e) => {
								e.preventDefault();
								window.alert("Pls Login");
							});
						});
					}
					likebooks.forEach((like) => {
						like.addEventListener("click", () => {
							document.getElementById(`Sub${like.dataset.idb}`).click();
						});
					});
				});
		});
		return ab;
	})
	.then((books) => {
		fetch("http://localhost:3000/api/v1/likes")
			.then((res) => res.json())
			.then((likes) => {
				const likebooks = document.querySelectorAll(".js_likeB");
				const formlikes = document.querySelectorAll(".js_formlikes");
				const iduser = localStorage.getItem("IDuser");
				if (iduser) {
					const userL = likes.find((like) => like.IDu == iduser);
					if (userL) {
						formlikes.forEach((flike) => {
							flike.setAttribute("action", "/update-listlike");
							flike.setAttribute("method", "POST");
							flike[0].value = iduser;
							// flike.addEventListener("submit", (e) => {
							// 	e.preventDefault();
							// });
						});
						const listNewBLike = userL.ListBook.split(",");
						likebooks.forEach((ilike) => {
							ilike.addEventListener("click", () => {
								const formLikeID = document.getElementById(
									`Get${ilike.dataset.idb}`
								);
								listNewBLike.push(ilike.dataset.idb);
								console.log(ilike.dataset.idb);
								const listBookNewO = [...new Set(listNewBLike)];
								formLikeID[1].value = listBookNewO.join(",");
							});
						});
					} else {
						formlikes.forEach((like) => {
							like.setAttribute("action", "/reate-listlike");
							like.setAttribute("method", "POST");
							like[0].value = iduser;
						});
						likebooks.forEach((ilike) => {
							ilike.addEventListener("click", () => {
								const formLikeID = document.getElementById(
									`Get${ilike.dataset.idb}`
								);
								formLikeID[1].value = ilike.dataset.idb;
							});
						});
					}
				} else {
					formlikes.forEach((flike) => {
						flike.addEventListener("submit", (e) => {
							e.preventDefault();
							window.alert("Pls Login");
						});
					});
				}
				likebooks.forEach((like) => {
					like.addEventListener("click", () => {
						document.getElementById(`Sub${like.dataset.idb}`).click();
					});
				});
			});
	});
