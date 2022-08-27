const formRegister = document.getElementById("formR");
fetch("http://localhost:3000/api/v1/users")
	.then((Response) => Response.json())
	.then((users) => {
		formRegister.addEventListener("submit", (e) => {
			const form = e.target;
			// const Fullname = form[0].value;
			// const Addr = form[1].value;
			// const Birthday = form[2].value;
			const Email = form[3].value;
			// const Password = form[4].value;
			// const BirD = new Date(Birthday);
			// const TimeS = new Date();
			// const encodePass = btoa(Password);
			// const Old = TimeS.getFullYear() - BirD.getFullYear();

			if (validate(form)) {
				const checkEmail = users.some((user) => {
					return Email === user.Email;
				});
				if (checkEmail) {
					alert("Tài khoản đã tồn tại");
					e.preventDefault();
				} else {
					alert("Đăng ký tài khoản thành công!");
				}
			} else {
				e.preventDefault();
			}
		});
	});

const validate = (form) => {
	const Fullname = form[0].value;
	const Addr = form[1].value;
	const Birthday = form[2].value;
	const Email = form[3].value;
	const Password = form[4].value;
	const rePassword = form[5].value;
	const testPassword = /^.{8,16}$/;
	//vali fullname
	if (!Fullname) {
		showError(form[0], "Not be empty");
		return false;
	} else {
		showSus(form[0]);
	}
	if (!Addr) {
		showError(form[1], "Not be empty");
		return false;
	} else {
		showSus(form[1]);
	}
	//vali birthday
	if (!Birthday) {
		showError(form[2], "Not be empty");
		return false;
	} else {
		showSus(form[2]);
	}
	//vali email
	if (!Email) {
		showError(form[3], "Not be empty");
		return false;
	} else {
		showSus(form[3]);
	}
	//vali password
	if (!Password) {
		showError(form[4], "Not be empty");
		return false;
	} else if (!testPassword.test(Password)) {
		showError(form[4], "Password must be between 8 and 16 characters");
		return false;
	} else {
		showSus(form[4]);
	}
	if (!rePassword) {
		showError(form[5], "Not be empty");
		return false;
	} else if (rePassword != Password) {
		showError(form[5], "Password does not match");
		return false;
	} else {
		showSus(form[5]);
	}
	return true;
};

const showError = (input, mess) => {
	let parent = input.parentElement;
	let small = parent.querySelector("small");
	let span = parent.querySelector("span");
	parent.classList.add("error");
	span.classList.add("ckeck");
	small.innerHTML = mess;
};

const showSus = (input) => {
	let parent = input.parentElement;
	let small = parent.querySelector("small");
	let span = parent.querySelector("span");
	parent.classList.remove("error");
	span.classList.remove("ckeck");
	small.innerHTML = "";
};
