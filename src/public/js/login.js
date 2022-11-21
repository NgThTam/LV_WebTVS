fetch("http://localhost:3000/api/v1/users")
	.then((response) => response.json())
	.then((users) => {
		const formL = document.querySelector(".js_form1");
		formL.addEventListener("submit", (e) => {
			const ac = formL[0].value;
			const pass = formL[1].value;
			const ecPass = btoa(pass);
			const ecytPass = atob(ecPass);
			if ((ac == "admin") & (pass == "admin")) {
				// formL.setAttribute("action", "./admin");
				localStorage.setItem("IDuser", "admin");
			} else {
				const checkAC = users.find((user) => {
					return user.Email == ac && user.Pass == ecPass;
				});
				if (checkAC != undefined) {
					localStorage.setItem("IDuser", checkAC.IDu);
					// if ((window.location = "#")) {
					// 	window.location = "/";
					// } else {
					window.location = "#";
					// }
				} else {
					e.preventDefault();
					alert("Account does not exist!");
				}
			}
			// }
		});
		return users;
	})
	.then((users) => {
		const logout = document.querySelector(".js_logout");
		if (localStorage.getItem("IDuser")) {
			if (localStorage.getItem("IDuser") == "admin") {
				logout.innerHTML = `<li class="menu_list">
										<a href="/admin" class="menu_list_home">
											<span class="list_color">Admin</span>
										</a>
									</li>
									<li class="menu_list">
										<a href="/" class="menu_list_home js_out">
											<span class="list_color">Logout</span>
										</a>
									</li>`;
				const out = document.querySelector(".js_out");
				out.addEventListener("click", () => {
					window.location = "#";
					localStorage.removeItem("IDuser");
				});
			} else {
				logout.innerHTML = ` <li class="menu_list">
                                    <a href="/profile" class="menu_list_home">
                                        <span class="list_color">Profile</span>
                                    </a>
                                </li>
								<li class="menu_list">
                                    <a href="/" class="menu_list_home js_out">
                                        <span class="list_color">Logout</span>
                                    </a>
                                </li>`;
				const out = document.querySelector(".js_out");
				out.addEventListener("click", () => {
					window.location = "#";
					localStorage.removeItem("IDuser");
				});
			}
		} else {
			logout.innerHTML = `<li class="menu_list">
			                        <a  class="menu_list_home js_register">
			                            <span class="list_color">Register</span>
			                        </a>
			                    </li>
			                    <li class="menu_list">
			                        <a class="menu_list_home js_login">
			                            <span class="list_color">Login</span>
			                        </a>
			                    </li>`;
			// open_close modal login
			const login = document.querySelector(".js_login");
			const modal_login = document.querySelector(".js_modal");
			const close_login = document.querySelector(".js_modalClose");
			const js_modal = document.querySelector(".js_modal_login");
			const lo_register = document.querySelector(".js_relogin");
			function showModalLogin() {
				modal_login.classList.add("open");
			}
			function closeModalLogin() {
				modal_login.classList.remove("open");
			}
			function modal_event() {
				event.stopPropagation();
			}
			login.addEventListener("click", showModalLogin);
			close_login.addEventListener("click", closeModalLogin);
			modal_login.addEventListener("click", closeModalLogin);
			js_modal.addEventListener("click", modal_event);
			lo_register.addEventListener("click", () => {
				modal_login.classList.remove("open");
				modal_register.classList.add("open");
			});
			//open_close modal register
			const relogin = document.querySelector(".js_regislogin");
			const register = document.querySelector(".js_register");
			const modal_register = document.querySelector(".modal1");
			const close_register = document.querySelector(".js_close_register");
			const register_contern = document.querySelector(".js_modal_register");
			function showModalRegister() {
				modal_register.classList.add("open");
			}
			function closeModalRegister() {
				modal_register.classList.remove("open");
			}
			function event_modal() {
				event.stopPropagation();
			}
			register.addEventListener("click", showModalRegister);
			close_register.addEventListener("click", closeModalRegister);
			modal_register.addEventListener("click", closeModalRegister);
			register_contern.addEventListener("click", event_modal);
			relogin.addEventListener("click", () => {
				modal_register.classList.remove("open");
				modal_login.classList.add("open");
			});
		}
	});
