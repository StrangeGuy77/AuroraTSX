import { Request, Response } from "express";
import * as path from "path";
import * as fs from "fs-extra";
import { Software } from "../../entity/Software";
import { genRandomId } from "../../utils/helper";
import { User } from "../../entity/User";

export const uploadSoftware = async (req: Request, res: Response) => {
  if (!req.body)
  {
    res.json({
      message: "Body is empty! You cannot save an empty software."
    });
  } else
  {
    const { title, description, devLanguages, price } = req.body;
    const { userId } = req.params;

    if (!userId)
    {
      res.json({
        message:
          "userId param is empty! You cannot save a software without a user relationship. Please add userId to the route with /softwares/:userId"
      });
    } else
    {
      if (!title || !description || !devLanguages || !price || !req.files)
      {
        res.json({
          message:
            "At least one of the following properties aren't within the body: title, description, devLanguages, price"
        });
      } else
      {

        const uuidRegex = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

        if (uuidRegex.test(userId))
        {
          const userExist = await User.findOne({
            where: {
              id: userId
            }
          });
          if (!userExist)
          {
            res.json({
              message:
                "The user who you're trying to relate to this software cannot be found within database. Please verify that the userId you put in the route param is correct."
            });
          } else
          {
            try
            {
              let url: string, result: any;
              url = genRandomId();
              result = await Software.find({
                where: {
                  filename: url
                }
              });

              const imageTempPath = req.files[0].path;
              const ext = path.extname(req.files[0].originalname).toLowerCase();
              const targetPath = path.resolve(`src/server/temp/upload/${url}${ext}`);

              if (
                ext === ".png" ||
                ext === ".jpg" ||
                ext === ".jpeg" ||
                ext === ".gif" ||
                ext === ".svg"
              )
              {

                try
                {
                  await fs.rename(imageTempPath, targetPath);

                  const newSoftware = Software.create({
                    description,
                    price,
                    title,
                    devLanguages: [devLanguages],
                    filename: url + ext,
                    user: userExist
                  });

                  try
                  {
                    await newSoftware.save();
                    res.json({
                      message: "Software succesfully saved."
                    });
                  } catch (error)
                  {
                    res.json({
                      message: "There was a problem trying to save the software.",
                      error
                    });
                  }
                } catch (error)
                {
                  res.json({
                    message: "There was an error while replacing image route path",
                    error
                  });
                }
              }
            } catch (error)
            {
              res.json({
                message: "There was an error while verifying image extensions",
                error
              });
            }
          }
        } else
        {
          res.json({
            message: "The uuid is non-sense! UUID's patterns are like: 6a2f41a3-c54c-fce8-32d2-0324e1c32e22"
          });
        }
      }
    }
  }
};
