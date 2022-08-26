import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "WebsiteTVS",
});

// simple query
// connection.query("SELECT * FROM `books` ", function (err, results, fields) {
// 	console.log(results);
// });

export default connection;
