import express from "express";
import getPage from "../controller/homeController";
import apiController from "../controller/apiController";
import bodyParser from "body-parser";
import multer from "multer";
var appRoot = require("app-root-path");
// /src/public/fileExcel/
let router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, appRoot + "/src/public/fileExcel/");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now() + ".xlsx");
	},
});
const storage1 = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, appRoot + "/src/public/image/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	},
});
const upload = multer({ storage: storage });
const upload1 = multer({ storage: storage1 });

const initWebRouter = (app) => {
	router.get("/", getPage.getHomePage);
	router.get("/test", getPage.test);
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
	router.get("/api/v1/likes", apiController.getAllLikes);
	router.get("/api/v1/categories", apiController.getAllcategories);
	router.get("/api/v1/book_category", apiController.getAllbookCategory);
	router.post("/reate-new-oder", apiController.createOder);
	router.post("/reate-new-rating", apiController.createRating);
	router.post("/reate-new-user", apiController.createUser);
	router.post("/reate-new-comment", apiController.createComment);
	router.post("/update-user", apiController.updateUser);
	router.post("/reate-new-book", apiController.createBook);
	router.post("/update-book", apiController.updateBook);
	router.post("/delete-book", apiController.deleteBook);
	router.post("/update-paystatus", apiController.updateStatus);
	router.post("/update-listlike", apiController.updateLikes);
	router.post("/reate-listlike", apiController.createLikes);
	router.post("/delete-book-like", apiController.deleteLikeBook);
	router.post(
		"/upload-file-addbooks",
		upload.single("myFile"),
		apiController.addbookfile
	);
	router.post(
		"/reate-new-book-image",
		upload1.single("fileimage"),
		apiController.createBookimagefile
	);
	// router.get("/detail/:userId", getPage.getAllUser);

	return app.use("/", router);
};

export default initWebRouter;
