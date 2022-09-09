// console.log(JSON.parse(localStorage.getItem("addCart")));
const reCart = document.querySelector(".remov");
reCart.addEventListener("click", () => {
	delete localStorage.addCart;
	window.location = "/";
});
let cart = JSON.parse(localStorage.getItem("addCart"));
const innerNum = document.querySelector(".js_num");
if (!cart) {
	innerNum.innerHTML = "0";
} else {
	innerNum.innerHTML = `${cart.length}`;
}
