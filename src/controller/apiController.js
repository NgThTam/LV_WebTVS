import connection from "../configs/connectDB";

let getAllUser = (req, res) => {
	connection.query("SELECT * FROM `user` ", (err, results, fields) => {
		let data = results.map((dt) => dt);

		// return res.render("./home.ejs", { dataUser: data });
		return res.status(200).json(data);
	});
	// return res.status(200).json({
	// 	massage: "oke",
	// });
};
let createUser = (req, res) => {
	let { firstName, lastName, address } = req.body;
	console.log(firstName);
	connection.query(
		"insert into user (firstName, lastName, address) values (?,?,?)",
		[firstName, lastName, address]
	);
	return res.redirect("/");
};

module.exports = {
	getAllUser,
	createUser,
};
