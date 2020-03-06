import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as multer from "multer";
import * as path from "path";

const startServer = async () => {
  const app = express();
  await createConnection();

  app.set("port", process.env.PORT || 3500);
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(
    multer({
      dest: path.join(__dirname, "../temp/upload")
    }).array("file")
  );
  app.listen(app.get("port"));
  console.log(`Listening on port ${app.get("port")}`);
};

export default startServer;
