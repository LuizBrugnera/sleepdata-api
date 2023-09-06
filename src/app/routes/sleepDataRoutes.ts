const { Router } = require("express");

import { sleepDataController } from "../controllers/sleepDataController/sleepDataController";
const sleepDataRoutes = new Router();

sleepDataRoutes
  .route("/sleepdata")
  .post(sleepDataController.create)
  .get(sleepDataController.getAll);

sleepDataRoutes.route("/sleepdata/grouped").get(sleepDataController.getGrouped);

sleepDataRoutes
  .route("/sleepdata/:id")
  .get(sleepDataController.getOne)
  .put(sleepDataController.update)
  .delete(sleepDataController.delete);

export default sleepDataRoutes;
