const express = require("express");
const crudRouter = express.Router();
const crudController = require("../controllers/crud");
//===============================================================
/* POST */
crudRouter.post("/api/create/:entityId", crudController.create);

/* POST */
crudRouter.post("/api/read/:entityId", crudController.read);

/* PUT */
crudRouter.put("/api/update/:entityId", crudController.update);

/* DELETE */
crudRouter.delete("/api/delete/:entityId", crudController.remove);

module.exports = crudRouter;
