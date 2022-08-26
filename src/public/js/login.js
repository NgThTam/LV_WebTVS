const formL = document.querySelector(".js_form1");
formL.addEventListener("submit", (e) => {
	const ac = formL[0].value;
	const pass = formL[1].value;
	const ecPass = btoa(pass);
	const ecytPass = atob(ecPass);
	if ((ac == "admin") & (pass == "admin")) {
		formL.setAttribute("action", "./admin");
	} else {
		// const checkAC = users.find((user) => {
		// 	return user.Email == ac && user.Pass == ecPass;
		// });
		// if (checkAC != undefined) {
		// 	localStorage.setItem("IDuser", checkAC.IDu);
		// 	window.location = "./index.html";
		// } else {
		e.preventDefault();
		alert("Account does not exist!");
	}
	// }
});
