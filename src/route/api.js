import express from "express";

import apiController from "../controller/apiController";

let router = express.Router();

const initAPI = (app) => {
	router.get("/api/v1/users", apiController.getAllUser);
	router.post("/createNew-User1", apiController.createUser);

	return app.use("/", router);
};

export default initAPI;
