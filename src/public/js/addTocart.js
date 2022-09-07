// console.log(JSON.parse(localStorage.getItem("addCart")));
const reCart = document.querySelector(".remov");
reCart.addEventListener("click", () => {
	delete localStorage.addCart;
	console.log(JSON.parse(localStorage.getItem("addCart")));
});
