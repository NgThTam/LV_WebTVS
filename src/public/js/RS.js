const rendrB = (book) => {
	return `<div class="item_best_book">
				<div class="image_book">
					<img src="${book.ImgB}" alt="">
					<div class="image_hover">
						<div class="search_image">
							<a href="detail" data-idb="${book.IDb}" class="icon_search js_Rs_item"><i class='bx bx-search-alt-2'></i></a>
						</div>
					</div>
				</div>
				<div class="tt_book">
					<a href="detail" class="title_book">${book.NameB}</a>
					<div class="aut_book">By: <span>${book.Author}</span></div>
				</div>
			</div>`;
};
const fakeRS = `<div class="item_best_book">
				<div class="image_book">
					<img src="http://images.amazon.com/images/P/0425182908.01.LZZZZZZZ.jpg" alt="">
					<div class="image_hover">
						<div class="search_image">
							<a href="/detail" class="icon_search js_click_rs" data-idrs="0425182908"><i class='bx bx-search-alt-2'></i></a>
						</div>
					</div>
				</div>
				<div class="tt_book">
					<a href="/detail js_click_rs" class="title_book" data-idrs="0425182908">Isle of Dogs</a>
					<div class="aut_book">By: <span>Patricia Cornwell</span></div>
				</div>
				</div>
				<div class="item_best_book">
				<div class="image_book">
					<img src="http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg" alt="">
					<div class="image_hover">
						<div class="search_image">
							<a href="/detail" class="icon_search js_click_rs" data-idrs="0195153448"><i class='bx bx-search-alt-2'></i></a>
						</div>
					</div>
				</div>
				<div class="tt_book">
					<a href="/detail" class="title_book js_click_rs" data-idrs="0195153448">Classical Mythology</a>
					<div class="aut_book">By: <span>Mark P.O.Morford</span></div>
				</div>
				</div>
				<div class="item_best_book">
				<div class="image_book">
					<img src="http://images.amazon.com/images/P/0393045218.01.LZZZZZZZ.jpg" alt="">
					<div class="image_hover">
						<div class="search_image">
							<a href="/detail" class="icon_search js_click_rs" data-idrs="0393045218"><i class='bx bx-search-alt-2'></i></a>
						</div>
					</div>
				</div>
				<div class="tt_book">
					<a href="/detail" class="title_book js_click_rs" data-idrs="0393045218">The Mummies of Urumchi</a>
					<div class="aut_book">By: <span>E.J.W.Barber</span></div>
				</div>
				</div>
				<div class="item_best_book">
				<div class="image_book">
					<img src="http://images.amazon.com/images/P/0440234743.01.LZZZZZZZ.jpg" alt="">
					<div class="image_hover">
						<div class="search_image">
							<a href="/detail" class="icon_search js_click_rs" data-idrs="0440234743"><i class='bx bx-search-alt-2'></i></a>
						</div>
					</div>
				</div>
				<div class="tt_book">
					<a href="/detail" class="title_book js_click_rs" data-idrs="0440234743">The Testament</a>
					<div class="aut_book">By: <span>John Grisham</span></div>
				</div>
				</div>
				<div class="item_best_book">
				<div class="image_book">
					<img src="http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg" alt="">
					<div class="image_hover">
						<div class="search_image">
							<a href="/detail" class="icon_search js_click_rs" data-idrs="0195153448"><i class='bx bx-search-alt-2'></i></a>
						</div>
					</div>
				</div>
				<div class="tt_book">
					<a href="/detail" class="title_book js_click_rs" data-idrs="0195153448">Classical Mythology</a>
					<div class="aut_book">By: <span>Mark P.O.Morford</span></div>
				</div>
				</div>`;
fetch("http://localhost:3000/api/v1/books")
	.then((res) => res.json())
	.then((books) => {
		fetch("/rs/RS.json")
			.then((Response) => Response.json())
			.then((RS) => {
				let arrRS = [];
				const id_b = localStorage.getItem("id_book");
				const a = RS.forEach((reco) => {
					if (id_b == reco.ISBN) {
						arrRS = reco.recomend;
					}
				});
				// console.log(arrRS);
				let recomemend = [];
				if (arrRS.length == 5) {
					arrRS.forEach((ars) => {
						books.forEach((book) => {
							if (ars === book.IDb) {
								recomemend.push(book);
							}
						});
					});
				}
				// console.log(recomemend);
				const renderRS = recomemend.map((recom) => {
					return rendrB(recom);
				});
				const Rss = document.getElementById("js_htgy");
				// console.log(renderRS);
				// console.log(recomemend);
				if (recomemend.length == 5) {
					Rss.innerHTML = renderRS.join(" ");
				} else {
					Rss.innerHTML = fakeRS;
					const jscldetails = document.querySelectorAll(".js_click_rs");
					jscldetails.forEach((rsdetail) => {
						rsdetail.addEventListener("click", () => {
							localStorage.setItem("id_book", rsdetail.dataset.idrs);
						});
					});
				}
			})
			.then(() => {
				const elRS = document.querySelectorAll(".js_Rs_item");
				elRS.forEach((elR) => {
					elR.addEventListener("click", () => {
						localStorage.setItem("id_book", elR.dataset.idb);
					});
				});
			});
	});
