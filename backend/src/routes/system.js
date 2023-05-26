const express = require("express");
const systemRouter = express.Router();
const systemController = require("../controllers/system");

/* POST */
systemRouter.post(
  "/api/system/isAuthenticatedUser/",
  systemController.isAuthenticatedUser
);

module.exports = systemRouter;
