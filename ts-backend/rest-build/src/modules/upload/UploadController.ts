import { Request, Response } from "express";
import * as path from "path";
import * as fs from "fs-extra";
import { Software } from "../../entity/Software";
import { genRandomId } from "../../utils/helper";
import { User } from "../../entity/User";

export const uploadSoftware = async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({
      message: "Body is empty! You cannot save an empty software."
    });
  } else {
    const { title, description, devLanguages, price } = req.body;
    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({
        message:
          "userId param is empty! You cannot save a software without a user relationship. Please add userId to the route with /softwares/:userId"
      });
    } else {
      if (!title || !description || !devLanguages || !price) {
        res.status(400).json({
          message:
            "At least one of the following properties aren't within the body: title, description, devLanguages, price"
        });
      } else {
        const userExist = await User.findOneOrFail({
          where: {
            id: userId
          }
        });
        if (!userExist) {
          res.json({
            message:
              "The user who you're trying to relate to this software cannot be found within database. Please verify that the userId you put in the route param is correct."
          });
        } else {
          let url: string, result: any;
          url = genRandomId();
          result = await Software.find({
            where: {
              filename: url
            }
          });
          console.log(typeof result, result);

          const imageTempPath = req.file.path;
          const ext = path.extname(req.file.originalname).toLowerCase();
          const targetPath = path.resolve(`public/upload/${url}${ext}`);

          if (
            ext === ".png" ||
            ext === ".jpg" ||
            ext === ".jpeg" ||
            ext === ".gif" ||
            ext === ".svg"
          ) {
            await fs.rename(imageTempPath, targetPath);

            const newSoftware = Software.create({
              description,
              price,
              title,
              devLanguages,
              filename: url + ext,
              user: userExist
            });

            try {
              await newSoftware.save();
            } catch (error) {
              res.status(400).json({
                message: "There was a problem trying to save the software.",
                error
              });
            }
          }
        }
      }
    }
  }
};
