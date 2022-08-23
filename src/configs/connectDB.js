import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "learnnodejs",
});

// simple query
// connection.query("SELECT * FROM `user` ", function (err, results, fields) {
// 	console.log(results);
// });

export default connection;
