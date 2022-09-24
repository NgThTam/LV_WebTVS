import connection from "../configs/connectDB";

let getAllbook = (req, res) => {
	connection.query("SELECT * FROM `books` ", (err, results, fields) => {
		let data = results.map((dt) => dt);
		return res.status(200).json(data);
	});
};

let getAllUser = (req, res) => {
	connection.query("SELECT * FROM `users` ", (err, results, fields) => {
		let data = results.map((dt) => dt);
		return res.status(200).json(data);
	});
};

let getAllRating = (req, res) => {
	connection.query("SELECT * FROM `ratings` ", (err, results, fields) => {
		let data = results.map((dt) => dt);
		return res.status(200).json(data);
	});
};

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

let createUser = (req, res) => {
	let { fullname, addr, birthday, email, password, repassword } = req.body;
	const BirD = new Date(birthday);
	const TimeS = new Date();
	const Old = TimeS.getFullYear() - BirD.getFullYear();
	const encodePass = btoa(password);
	const id = random(8);

	connection.query(
		"INSERT INTO `users`(`IDu`, `FullName`, `Old`, `Addr`, `Email`, `Pass`) VALUES (?,?,?,?,?,?)",
		// "insert into users (firstName, lastName, address) values (?,?,?)",
		[id, fullname, Old, addr, email, encodePass]
	);
	return res.redirect("/");
};
let createComment = (req, res) => {
	let cmt = req.body;
	connection.query(
		"INSERT INTO `comments`(`IDb`, `IDu`, `Comment`, `TimeCmt`) VALUES (?,?,?,?)",
		// "insert into users (firstName, lastName, address) values (?,?,?)",
		[cmt.idBook, cmt.idUser, cmt.comment, cmt.timeCmt]
	);
	return res.redirect("/detail");
};
let createOder = (req, res) => {
	let { IDo, IDu, Cart, DateRental, DatePay } = req.body;
	connection.query(
		"INSERT INTO `oders`(`IDo`, `IDu`, `Cart`, `DateRental`, `DatePay`) VALUES (?,?,?,?,?)",
		[IDo, IDu, Cart, DateRental, DatePay]
	);
	return res.redirect("/");
};
let createRating = (req, res) => {
	let { star, Idu, Idb } = req.body;
	connection.query(
		"INSERT INTO `ratings`(`IDb`, `IDu`, `Star`) VALUES (?,?,?)",
		[Idb, Idu, star]
	);
	return res.redirect("/detail");
};

module.exports = {
	createUser,
	getAllbook,
	getAllUser,
	getAllRating,
	createComment,
	createOder,
	createRating,
};
