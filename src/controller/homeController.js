import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
	return res.render("./home.ejs");
};
let getBooksPage = (req, res) => {
	return res.render("./books.ejs");
};
let getAdminPage = (req, res) => {
	return res.render("./admin.ejs");
};
let getDetailPage = (req, res) => {
	return res.render("./detail.ejs");
};
let getProfilePage = (req, res) => {
	return res.render("./profile.ejs");
};
let getVoucherPage = (req, res) => {
	return res.render("./vcart.ejs");
};
// let test = (req, res) => {
// 	return res.render("./test.ejs");
// };

module.exports = {
	getHomePage,
	getBooksPage,
	getAdminPage,
	getDetailPage,
	getProfilePage,
	getVoucherPage,
	// test,
};
