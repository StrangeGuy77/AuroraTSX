import { Request, Response } from "express";
import { User } from "../../entity/User";
import { getManager } from "typeorm";
import * as cloudinary from "cloudinary";
import * as path from "path";
import * as fs from "fs";

export const UpdateUserInfo = async (req: Request, res: Response) => {
  if (!req.query) {
    res.status(400).json({
      message: "Query is empty! Test something with ?username= or ?userId=",
    });
  } else {
    if (!req.body) {
      res.status(400).json({
        message: "You cannot send empty body request for an update!",
      });
    } else {
      const { username, userId } = req.query;
      let userExist: User;
      if (username) {
        try {
          userExist = await User.findOne({
            where: {
              username,
            },
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          userExist = await User.findOne({
            where: {
              id: userId,
            },
          });
        } catch (error) {
          console.log(error);
        }
      }

      if (req.query.userprofilepic) {
        const imageTempPath = req.files[0].path;
        const ext = path.extname(req.files[0].originalname).toLowerCase();

        if (
          ext === ".png" ||
          ext === ".jpg" ||
          ext === ".jpeg" ||
          ext === ".gif" ||
          ext === ".svg"
        ) {
          try {
            const response = await cloudinary.v2.uploader.upload(
              imageTempPath,
              {}
            );
            userExist.profilePic = response.secure_url;
            fs.unlink(imageTempPath, () => null);
            console.log(response);
            try {
              await userExist.save();
              res.status(200).json({
                message: "Profile pic has been updated.",
                userExist,
              });
            } catch (error) {
              res.status(500).json({
                message: "There was an error while saving pic within database.",
                error,
              });
            }
          } catch (error) {
            res.status(500).json({
              message: "There was an error while sending pic to cloudinary",
              error,
            });
          }
        } else {
          res.status(400).json({
            message:
              "The image you're trying to upload doesn't meet the requirements for an image. Check extension.",
          });
        }
      } else {
        const body = req.body;

        try {
          const updatedUser = await getManager()
            .getRepository(User)
            .update(userExist.id, body);
          res.status(200).json({
            message: "User has been succesfully updated.",
            updatedUser,
          });
        } catch (error) {
          res.status(500).json({
            message: "There was an error trying to update the user",
            error,
          });
        }
      }
    }
  }
};
