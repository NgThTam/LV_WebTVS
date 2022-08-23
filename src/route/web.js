import express from "express";
import getPage from "../controller/homeController";
import bodyParser from "body-parser";

let router = express.Router();

const initWebRouter = (app) => {
	router.get("/", getPage.getHomePage);
	// router.get("/detail/:userId", getPage.getDetailPage);

	return app.use("/", router);
};

export default initWebRouter;