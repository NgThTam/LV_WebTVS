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

module.exports = {
	getHomePage,
	getBooksPage,
	getAdminPage,
};
