let BackTop = document.querySelector(".link_back_home");
window.addEventListener("scroll", () => {
	let scrollH = window.pageYOffset;
	if (scrollH >= 100) {
		BackTop.classList.add("js_back_home");
	} else {
		BackTop.classList.remove("js_back_home");
	}
});

// Scroll fixed header
const header = document.querySelector(".js_header");
let headerHeight = header.clientHeight;
window.addEventListener("scroll", function () {
	let scrollHeight = window.pageYOffset;
	if (scrollHeight > headerHeight - 10) {
		header.classList.add("js_scroll_header");
	} else {
		header.classList.remove("js_scroll_header");
	}
});

// open_close modal login
// const login = document.querySelector(".js_login");
// const modal_login = document.querySelector(".js_modal");
// const close_login = document.querySelector(".js_modalClose");
// const js_modal = document.querySelector(".js_modal_login");
// function showModalLogin() {
// 	modal_login.classList.add("open");
// }
// function closeModalLogin() {
// 	modal_login.classList.remove("open");
// }
// function modal_event() {
// 	event.stopPropagation();
// }
// login.addEventListener("click", showModalLogin);
// close_login.addEventListener("click", closeModalLogin);
// modal_login.addEventListener("click", closeModalLogin);
// js_modal.addEventListener("click", modal_event);
//login admin
// const form = document.querySelector(".js_form");
// form.addEventListener("submit", () => {
// 	const ac = form[0].value;
// 	const pass = form[1].value;
// 	if ((ac == "admin") & (pass == "admin")) {
// 		form.setAttribute("action", "./admin.html");
// 	}
// });
//open_close modal register

// const register = document.querySelector(".js_register");
// const modal_register = document.querySelector(".modal1");
// const close_register = document.querySelector(".js_close_register");
// const register_contern = document.querySelector(".js_modal_register");
// function showModalRegister() {
// 	modal_register.classList.add("open");
// }
// function closeModalRegister() {
// 	modal_register.classList.remove("open");
// }
// function event_modal() {
// 	event.stopPropagation();
// }
// register.addEventListener("click", showModalRegister);
// close_register.addEventListener("click", closeModalRegister);
// modal_register.addEventListener("click", closeModalRegister);
// register_contern.addEventListener("click", event_modal);

// ratings
const stars = document.querySelectorAll(".js_star");
stars.forEach((star) => {
	star.addEventListener("mouseover", (e) => {
		e.target.classList.add("js_yello");
		let valu = parseInt(e.target.getAttribute("value"));
		stars.forEach((st) => {
			let vast = st.getAttribute("value");
			if (vast < valu) {
				st.classList.add("js_yello");
			}
		});
	});
	star.addEventListener("mouseout", (e) => {
		e.target.classList.remove("js_yello");
		let val = parseInt(e.target.getAttribute("value"));
		stars.forEach((st) => {
			let vast = st.getAttribute("value");
			if (vast < val) {
				st.classList.remove("js_yello");
			}
		});
	});
});

//cart
const divCart = document.querySelector(".js_cart");
const modalCart = document.querySelector(".js_modalcart");
const ctCart = document.querySelector(".js_contentCart");
const imgCart = document.querySelector(".js_imgcart");
divCart.addEventListener("click", () => {
	modalCart.classList.add("js_openCart");
});
modalCart.addEventListener("click", () => {
	modalCart.classList.remove("js_openCart");
});
imgCart.addEventListener("click", () => {
	modalCart.classList.remove("js_openCart");
});
ctCart.addEventListener("click", (e) => {
	e.stopPropagation();
});
