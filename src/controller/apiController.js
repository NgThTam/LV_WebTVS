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
let getAllOder = (req, res) => {
	connection.query("SELECT * FROM `oders` ", (err, results, fields) => {
		let data = results.map((dt) => dt);
		return res.status(200).json(data);
	});
};
let getAllComment = (req, res) => {
	connection.query("SELECT * FROM `comments` ", (err, results, fields) => {
		let data = results.map((dt) => dt);
		return res.status(200).json(data);
	});
};
let getAllLikes = (req, res) => {
	connection.query("SELECT * FROM `likes`", (err, results, fields) => {
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
	let { IDo, IDu, Cart, DateRental, DatePay, Listamount } = req.body;
	let arrB = Listamount.split(";");
	arrB.forEach((elarrB) => {
		connection.query("UPDATE `books` SET `amount`=? WHERE `IDb`= ?", [
			elarrB.split(",")[1] - 1,
			elarrB.split(",")[0],
		]);
	});
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

let updateUser = (req, res) => {
	let { FullName, Addr, IDuser, Old, Email, Pass } = req.body;
	connection.query(
		"UPDATE `users` SET `FullName`=?,`Old`=?,`Addr`=?,`Email`=?,`Pass`=? WHERE `IDu`= ?",
		[FullName, Old, Addr, Email, Pass, IDuser]
	);
	return res.redirect("/profile");
};
let createBook = (req, res) => {
	let { title, author, yearPub, publisher, image, Idb } = req.body;
	connection.query(
		"INSERT INTO `books`(`IDb`, `NameB`, `Author`, `YearPub`, `Publiser`, `ImgB`) VALUES (?,?,?,?,?,?)",
		[Idb, title, author, yearPub, publisher, image]
	);
	return res.redirect("/admin");
};
let updateBook = (req, res) => {
	let { idB, title, author, yearpub, publisher, imageB } = req.body;
	connection.query(
		"UPDATE `books` SET `NameB`=?,`Author`=?,`YearPub`=?,`Publiser`=?,`ImgB`=? WHERE `IDb`=?",
		[title, author, yearpub, publisher, imageB, idB]
	);
	return res.redirect("/admin");
};
let deleteBook = (req, res) => {
	let { idB } = req.body;
	console.log(idB);
	// connection.query("DELETE FROM `books` WHERE `IDb`=?", [idB]);
	return res.redirect("/admin");
};

let updateStatus = (req, res) => {
	let { IDo, IDu, Cart, DateRental, DatePay, PayStatus, ListAmount } = req.body;
	let arrBAmount = ListAmount.split(";");
	arrBAmount.forEach((amount) => {
		connection.query("UPDATE `books` SET `amount`=? WHERE `IDb`= ?", [
			parseInt(amount.split(",")[1]) + 1,
			amount.split(",")[0],
		]);
	});
	connection.query(
		"UPDATE `oders` SET `IDu`=?,`Cart`=?,`DateRental`=?,`DatePay`=?,`PayStatus`=? WHERE `IDo`=?",
		[IDu, Cart, DateRental, DatePay, PayStatus, IDo]
	);
	return res.redirect("/admin");
};
let updateLikes = (req, res) => {
	let { Idu, listBlike } = req.body;
	connection.query("UPDATE `likes` SET `ListBook`=? WHERE `IDu`=?", [
		listBlike,
		Idu,
	]);
	return res.redirect("/books");
};
let createLikes = (req, res) => {
	let { Idu, listBlike } = req.body;
	connection.query("INSERT INTO `likes`(`IDu`, `ListBook`) VALUES (?,?)", [
		Idu,
		listBlike,
	]);
	return res.redirect("/books");
};
let deleteLikeBook = (req, res) => {
	let { idu, idb } = req.body;
	connection.query(
		"SELECT * FROM `likes` WHERE `IDu`=?",
		[idu],
		(err, results, fields) => {
			const newListB = results[0].ListBook.split(",").filter((ib) => ib != idb);
			connection.query("UPDATE `likes` SET `ListBook`=? WHERE `IDu`=?", [
				newListB.join(","),
				idu,
			]);
		}
	);
	return res.redirect("/profile");
};

module.exports = {
	createUser,
	getAllbook,
	getAllUser,
	getAllRating,
	getAllOder,
	getAllLikes,
	getAllComment,
	createComment,
	createOder,
	createRating,
	updateUser,
	createBook,
	updateBook,
	deleteBook,
	updateStatus,
	updateLikes,
	createLikes,
	deleteLikeBook,
};
