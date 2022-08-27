import express from "express";
import getPage from "../controller/homeController";
import apiController from "../controller/apiController";
import bodyParser from "body-parser";

let router = express.Router();

const initWebRouter = (app) => {
	router.get("/", getPage.getHomePage);
	router.get("/books", getPage.getBooksPage);
	router.get("/admin", getPage.getAdminPage);
	router.get("/detail", getPage.getDetailPage);
	router.get("/api/v1/books", apiController.getAllbook);
	router.get("/api/v1/users", apiController.getAllUser);
	router.post("/reate-new-user", apiController.createUser);
	// router.get("/detail/:userId", getPage.getAllUser);

	return app.use("/", router);
};

export default initWebRouter;
