import express, { Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import path from "path";
import multer from "multer";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import router from "../routes/index";
import { unkownRoute } from "../controllers/main";

export default class Server {
  public app: Application;

  constructor() {
    dotenv.config();
    this.app = express();
    this.config();
    this.database();
    this.routes();
    this.start();
  }

  protected config(): void {
    this.app.set("port", process.env.PORT || 4000);
    this.app.use(morgan("dev"));
    this.app.use(
      multer({
        dest: path.join(__dirname, "./upload/images/temp")
      }).array("image")
    );
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  public routes(): void {
    this.app.use("/api", router);
    this.app.route("*").all(unkownRoute);
  }

  private async database() {
    // This method check environment to switch between local and remote database.
    if (process.env.NODE_ENV === "development") {
      const uri: string | any = process.env.MDB_LOCALHOST;
      await mongoose
        .connect(uri, {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        })
        .catch((err: Error) => console.log(err.message));
      console.log("Connected to local database");
    } else {
      // Connect to Mongodb atlas
      const uri: string | any = process.env.MDB_ATLAS_URI;
      const client: MongoClient = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      client.connect((err: Error) => {
        const collection = client.db("test").collection("devices");
        return collection;
      });
      console.log("Conectado a la base de datos remota");
    }
  }

  private start(): void {
    this.app.listen(this.app.get("port"));
    console.log(`Server listening on port: ${this.app.get("port")}`);
  }
}
