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
const viewOs = document.querySelectorAll(".js_viewO");
const modalO = document.querySelector(".js_modalview");
const cntO = document.querySelector(".js_cntO");
viewOs.forEach((view) => {
	view.addEventListener("click", () => {
		modalO.classList.add("showM");
	});
});
modalO.addEventListener("click", () => {
	modalO.classList.remove("showM");
});
cntO.addEventListener("click", (e) => {
	e.stopPropagation();
});
