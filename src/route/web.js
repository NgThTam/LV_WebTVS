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
	router.get("/voucher", getPage.getVoucherPage);
	router.get("/profile", getPage.getProfilePage);
	router.get("/api/v1/books", apiController.getAllbook);
	router.get("/api/v1/users", apiController.getAllUser);
	router.get("/api/v1/ratings", apiController.getAllRating);
	router.get("/api/v1/oders", apiController.getAllOder);
	router.get("/api/v1/comments", apiController.getAllComment);
	router.post("/reate-new-oder", apiController.createOder);
	router.post("/reate-new-rating", apiController.createRating);
	router.post("/reate-new-user", apiController.createUser);
	router.post("/reate-new-comment", apiController.createComment);
	router.post("/update-user", apiController.updateUser);
	router.post("/reate-new-book", apiController.createBook);
	router.post("/update-book", apiController.updateBook);
	router.post("/delete-book", apiController.deleteBook);
	// router.get("/detail/:userId", getPage.getAllUser);

	return app.use("/", router);
};

export default initWebRouter;
