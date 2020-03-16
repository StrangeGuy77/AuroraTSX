import "reflect-metadata";
// import { createConnection } from "typeorm";
import * as express from "express";
import * as multer from "multer";
import * as path from "path";
import router from "../routes/index.routes";
import * as cors from 'cors';
import * as cloudinary from 'cloudinary';
import { config } from 'dotenv';
import { createTypeOrmConn } from "../../utils/ormConn";


const startServer = async (getServer?: boolean) => {
  const app = express();

  config();
  await createTypeOrmConn();

  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'strangeguy77',
    api_key: process.env.ClOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  app.use(cors());
  app.set("port", process.env.PORT || 3500);
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(
    multer({
      dest: path.join(__dirname, "../temp/upload")
    }).array("file")
  );


  router(app);
  const server = app.listen(app.get("port"));
  console.log(`Listening on port ${app.get("port")}`);

  if (getServer)
  {
    return server;
  } else
  {
    return app;
  }
};

export default startServer;
