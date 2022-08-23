import express from "express";
import configViewEngine from "./configs/viewEngine";
import "dotenv/config";
import initWebRouter from "./route/web";
// import initAPI from "./route/api";
// import connection from "./configs/connectDB";

const app = express();
const port = process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//config
configViewEngine(app);
//init web route
initWebRouter(app);
//init api
// initAPI(app);s

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
