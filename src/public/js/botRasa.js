// !(function () {
// 	let e = document.createElement("script"),
// 		t = document.head || document.getElementsByTagName("head")[0];
// 	(e.src = "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
// 		// Replace 1.x.x with the version that you want
// 		(e.async = !0),
// 		(e.onload = () => {
// 			window.WebChat.default(
// 				{
// 					// initPayload: "Chào mừng bạn đến với thư viện chúng tôi!!",
// 					title: "BOOKs Bot",
// 					subtitle: "Assistant",
// 					customData: { language: "vi" },
// 					socketUrl: "http://localhost:5005",
// 					profileAvatar:
// 						"https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png",
// 					params: {
// 						storage: "session",
// 					},
// 					// add other props here
// 				},
// 				null
// 			);
// 		}),
// 		t.insertBefore(e, t.firstChild);
// })();
