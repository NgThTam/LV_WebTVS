import connection from "../configs/connectDB";
import readXlsxFile from "read-excel-file/node";
var appRoot = require("app-root-path");

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
let getAllcategories = (req, res) => {
	connection.query("SELECT * FROM `categories` ", (err, results, fields) => {
		let data = results.map((dt) => dt);
		return res.status(200).json(data);
	});
};
let getAllbookCategory = (req, res) => {
	connection.query("SELECT * FROM `book_category` ", (err, results, fields) => {
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
	let { title, author, yearPub, publisher, fileimage, image, Idb, category } =
		req.body;
	let numamount = 10;

	connection.query(
		"INSERT INTO `books`(`IDb`, `NameB`, `Author`, `YearPub`, `Publiser`, `ImgB`, `amount`) VALUES (?,?,?,?,?,?,?)",
		[Idb, title, author, yearPub, publisher, image, numamount]
	);
	connection.query("INSERT INTO `book_category`(`IDb`, `IDc`) VALUES (?,?)", [
		Idb,
		category,
	]);
	return res.redirect("/admin");
};
let createBookimagefile = (req, res) => {
	let { title, author, yearPub, publisher, image, Idb, category } = req.body;
	let numamount = 10;
	let nameIm = `image/${req.file.filename}`;
	connection.query(
		"INSERT INTO `books`(`IDb`, `NameB`, `Author`, `YearPub`, `Publiser`, `ImgB`, `amount`) VALUES (?,?,?,?,?,?,?)",
		[Idb, title, author, yearPub, publisher, nameIm, numamount]
	);
	connection.query("INSERT INTO `book_category`(`IDb`, `IDc`) VALUES (?,?)", [
		Idb,
		category,
	]);
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
	connection.query("DELETE FROM `books` WHERE `IDb`=?", [idB]);
	connection.query("DELETE FROM `book_category` WHERE `IDb`=?", [idB]);
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
const map = {
	id: "id",
	title: "title",
	author: "author",
	yearPub: "yearPub",
	publisher: "publisher",
	image: "image",
	amount: "amount",
	categories: "categories",
};
let addbookfile = (req, res, next) => {
	readXlsxFile(appRoot + "/src/public/fileExcel/" + req.file.filename, {
		map,
	}).then(({ rows }) => {
		// console.log(rows);
		rows.forEach((row) => {
			let IDctext;
			switch (row.categories.toLowerCase()) {
				case "biography & autobiography":
					IDctext = "Cg1";
					break;
				case "history":
					IDctext = "Cg2";
					break;
				case "fiction":
					IDctext = "Cg3";
					break;
				case "juvenile fiction":
					IDctext = "Cg4";
					break;
				case "literary criticism":
					IDctext = "Cg5";
					break;
				default:
					IDctext = "Cg1";
			}
			connection.query(
				"INSERT INTO `books`(`IDb`, `NameB`, `Author`, `YearPub`, `Publiser`, `ImgB`, `amount`) VALUES (?,?,?,?,?,?,?)",
				[
					row.id,
					row.title,
					row.author,
					row.yearPub,
					row.publisher,
					row.image,
					row.amount,
				]
			);
			connection.query(
				"INSERT INTO `book_category`(`IDb`, `IDc`) VALUES (?,?)",
				[row.id, IDctext]
			);
		});
	});
	return res.redirect("/admin");
};
let createCate = (req, res) => {
	let { NameCate, idcate } = req.body;
	connection.query("INSERT INTO `categories`(`IDc`, `NameC`) VALUES (?,?)", [
		idcate,
		NameCate,
	]);
	return res.redirect("/admin");
};
let delecate = (req, res) => {
	let { idcategory } = req.body;
	console.log(idcategory);
	connection.query("DELETE FROM `categories` WHERE `IDc`=?", [idcategory]);
	return res.redirect("/admin");
};
let updatecate = (req, res) => {
	let { IDc, newname } = req.body;
	connection.query("UPDATE `categories` SET `NameC`=? WHERE `IDc`=?", [
		newname,
		IDc,
	]);
	return res.redirect("/admin");
};
let createFeedback = (req, res) => {
	let { fname, email, phone, title, message, date, idfb } = req.body;
	connection.query(
		"INSERT INTO `feedback`(`IDf`, `fbname`, `femail`, `phone`, `ftitle`, `message`, `fdate`) VALUES (?,?,?,?,?,?,?)",
		[idfb, fname, email, phone, title, message, date]
	);
	return res.redirect("/contacts");
};

module.exports = {
	createUser,
	getAllbook,
	getAllUser,
	getAllRating,
	getAllOder,
	getAllLikes,
	getAllComment,
	getAllcategories,
	getAllbookCategory,
	createComment,
	createOder,
	createRating,
	updateUser,
	createBook,
	createBookimagefile,
	updateBook,
	deleteBook,
	updateStatus,
	updateLikes,
	createLikes,
	deleteLikeBook,
	addbookfile,
	createCate,
	delecate,
	updatecate,
	createFeedback,
};
