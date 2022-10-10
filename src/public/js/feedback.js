const sts = document.querySelectorAll(".js_star");
const formRa = document.querySelector(".js_star");
sts.forEach((star) => {
	star.addEventListener("click", (e) => {
		// e.preventDefault();
		const formR = star.parentElement.parentElement.parentElement;
		if (localStorage.getItem("IDuser")) {
			const valueRatings = star.dataset.value;
			const vstar = star.dataset.star;
			const Idu = localStorage.getItem("IDuser");
			const Idb = localStorage.getItem("id_book");
			formR.addEventListener("submit", (e) => {
				formR[2].value = Idu;
				formR[3].value = Idb;
			});
			// console.log(valueRatings);
			alert(`You have successfully rated the product ${vstar} star !!!`);
		} else {
			alert("Please login before rating the product!!");
			e.preventDefault();
		}
	});
});
