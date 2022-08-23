import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
	return res.render("./home.ejs");
};

module.exports = {
	getHomePage,
};
