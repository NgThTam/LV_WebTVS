const formmessage = document.querySelector(".js_formmessage");
const testphone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const random = (length) => {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};
formmessage.addEventListener("submit", (e) => {
	if (formmessage[5].checked) {
		if (
			!formmessage[0].value |
			!formmessage[1].value |
			!formmessage[2].value |
			!formmessage[3].value |
			!formmessage[4].value
		) {
			window.alert("no empty!");
			e.preventDefault();
		}
		if (!testphone.test(formmessage[2].value)) {
			window.alert("invalid phone number!");
			e.preventDefault();
		} else {
			let today = new Date();
			let day = today.getDate();
			let month = today.getMonth() + 1;
			let fullday = day < 10 ? `0${day}` : day;
			let fullmonth = month < 10 ? `0${month}` : month;
			let fulldate = `${fullday}/${fullmonth}/${today.getFullYear()}`;
			formmessage[7].value = random(8);
			formmessage[6].value = fulldate;
		}
	} else {
		window.alert("you need to agree to the terms!");
		e.preventDefault();
	}
});
