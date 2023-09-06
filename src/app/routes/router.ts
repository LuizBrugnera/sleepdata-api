import sleepDataRoutes from "./sleepDataRoutes";
const { Router } = require("express");

const routes = new Router();

routes.use(sleepDataRoutes);

export default routes;
