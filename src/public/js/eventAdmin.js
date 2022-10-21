const adlis = document.querySelectorAll(".js_admin_li");
const scrs = document.querySelectorAll(".js_scr");
adlis.forEach((adli) => {
	adli.addEventListener("click", () => {
		// const li = e.target;
		adlis.forEach((adl) => {
			adl.classList.remove("js_admin_active");
		});
		adli.classList.add("js_admin_active");
		scrs.forEach((scr) => {
			scr.classList.remove("js_show_scr");
		});
		let id = adli.dataset.id;
		let shscr = document.getElementById(id);
		shscr.classList.add("js_show_scr");
	});
});

const funSfile = document.querySelector(".js_eventSfile");
const divshow = document.querySelector(".js_showsearchF");
const inputsfile = document.querySelector(".js_inputSFile");
const nameFile = document.querySelector(".js_nameFile");
const funaddfile = document.querySelector(".js_addfile");
funSfile.addEventListener("click", () => {
	funSfile.classList.toggle("boderFunsearch");
	divshow.classList.toggle("disBlock");
	funaddfile.classList.toggle("left100");
});
inputsfile.addEventListener("change", () => {
	nameFile.innerHTML = inputsfile.files[0].name;
});
const iconshow = document.querySelector(".js_showMSF");
const msf = document.querySelector(".js_MSF");
const iconclose = document.querySelector(".js_iconcolseF");
const bodymsf = document.querySelector(".js_bodyMSF");
iconshow.addEventListener("click", () => {
	msf.classList.add("dispFlEx");
});
iconclose.addEventListener("click", () => {
	msf.classList.remove("dispFlEx");
});
msf.addEventListener("click", () => {
	msf.classList.remove("dispFlEx");
});
bodymsf.addEventListener("click", (e) => {
	e.stopPropagation();
});

const srchoosedl = document.querySelector(".js_showicondown");
const icondown = document.querySelector(".js_icondown");
const twochoose = document.querySelectorAll(".js_closeevent");
icondown.addEventListener("click", (e) => {
	srchoosedl.classList.toggle("dlblock");
	icondown.classList.toggle("bggray");
	e.stopPropagation();
});
bodymsf.addEventListener("click", () => {
	srchoosedl.classList.remove("dlblock");
	icondown.classList.remove("bggray");
});
srchoosedl.addEventListener("click", (e) => {
	e.stopPropagation();
});
twochoose.forEach((ic) => {
	ic.addEventListener("click", () => {
		srchoosedl.classList.remove("dlblock");
		icondown.classList.remove("bggray");
	});
});
