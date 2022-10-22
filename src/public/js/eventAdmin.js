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
//add file
const map = {
	id: "id",
	title: "title",
	author: "author",
	yearPub: "yearPub",
	publisher: "publisher",
	image: "image",
	amount: "amount",
};
const convbook = (book) => {
	return `<tr class="tableBadmin">
				<td>${book.id}</td>
				<td style="text-align:left;">${book.title}</td>
				<td>${book.author}</td>
				<td>${book.yearPub}</td>
				<td>${book.publisher}</td>
				<td>${book.amount}</td>
				<td><img src="${book.image}" alt=""></td>
			</tr>`;
};
const inpbookfile = document.querySelector(".js_inputbookfile");
const namefilebook = document.querySelector(".js_namebookflie");
const iconviewfile = document.querySelector(".js_viewfileadd");
const modaladdfile = document.querySelector(".js_modalfileadd");
const bodymodaladd = document.querySelector(".js_bodymodalfileadd");
const iconloseadd = document.querySelector(".js_iconloseaddfile");
const twoformadd = document.querySelector(".js_showformadd");
const innerfileadd = document.querySelector(".jd_contentaddfile");
const butbodysub = document.querySelector(".js_butsubfileadd");
inpbookfile.addEventListener("change", () => {
	namefilebook.innerHTML = inpbookfile.files[0].name;
});
iconviewfile.addEventListener("click", () => {
	modaladdfile.classList.add("flexdis");
});
modaladdfile.addEventListener("click", () => {
	modaladdfile.classList.remove("flexdis");
});
bodymodaladd.addEventListener("click", (e) => {
	e.stopPropagation();
});
iconloseadd.addEventListener("click", () => {
	modaladdfile.classList.remove("flexdis");
});
funaddfile.addEventListener("click", () => {
	funaddfile.classList.toggle("boderFunsearch");
	twoformadd.classList.toggle("showblock");
});
inpbookfile.addEventListener("change", () => {
	readXlsxFile(inpbookfile.files[0], { map }).then(({ rows }) => {
		innerfileadd.innerHTML = rows.map((book) => convbook(book)).join(" ");
	});
});
butbodysub.addEventListener("click", () => {
	document.getElementById(butbodysub.dataset.idsubfile).click();
});
