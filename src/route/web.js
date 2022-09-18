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
	// router.get("/voucher", getPage.getDetailPage);
	router.get("/profile", getPage.getProfilePage);
	router.get("/api/v1/books", apiController.getAllbook);
	router.get("/api/v1/users", apiController.getAllUser);
	router.get("/api/v1/ratings", apiController.getAllRating);

	router.post("/reate-new-user", apiController.createUser);
	router.post("/reate-new-comment", apiController.createComment);
	// router.get("/detail/:userId", getPage.getAllUser);

	return app.use("/", router);
};

export default initWebRouter;
