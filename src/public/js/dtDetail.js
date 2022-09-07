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
		console.log(arr);
		eacart.addEventListener("click", () => {
			arr.push(eacart.dataset.id);
			arr = arr.filter(onlyUnique); //loc gtri trung
			localStorage.setItem("addCart", JSON.stringify(arr));
			console.log(JSON.parse(localStorage.getItem("addCart")));
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
	});

const mean = (arr) => {
	let smean = 0;
	const length = arr.length;
	arr.forEach((value) => {
		smean += value.Star;
	});
	return smean / length;
};

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}
