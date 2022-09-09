const nameU = document.querySelector(".prof_ad p");

fetch("http://localhost:3000/api/v1/users")
	.then((response) => response.json())
	.then((users) => {
		let id = localStorage.IDuser;
		const Us = users.find((user) => user.IDu == id);
		// const em = Us.Email;
		const name = Us.Email.slice(0, Us.Email.indexOf("@"));
		// console.log(em.indexOf("@"));
		nameU.innerHTML = `@-${name}`;
	});
