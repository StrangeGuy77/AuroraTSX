import { Application, Router } from "express";
import SoftwareRouter from "./software/index.routes";
import UserRouter from "./user/index.routes";
import {
  getRecentSoftwares,
  defaultRouteAnswer
} from "../../modules/querying/HomeQueryingController";

const router = Router();

export default (app: Application) => {
  router
    .route("/")
    .get(getRecentSoftwares)
    .all(defaultRouteAnswer);

  router.use(SoftwareRouter);
  router.use(UserRouter);

  app.use(router);

  return app;
};
