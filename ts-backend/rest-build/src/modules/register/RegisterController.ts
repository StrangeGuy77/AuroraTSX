import { Request, Response } from "express";
import { User } from "../../entity/User";
import * as bcrypt from "bcryptjs";

export const SignUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  console.log(req.body);
  if (!email || !password || !username) {
    res.status(400).json({
      message:
        "Either the body is empty or it left for username, email or password fields."
    });
  } else {
    try {
      const duplicatedEmail = await User.findOne({
        where: {
          email
        }
      });
      if (duplicatedEmail) {
        res.status(400).json({
          message: "The email you're trying signup with is already in use."
        });
      } else {
        try {
          const hashedPassword = bcrypt.hashSync(password, 10);
          const newUser = User.create({
            email,
            password: hashedPassword,
            username
          });
          await newUser.save();
          newUser.password = "";
          res.status(200).json({
            message: "The user was created succesfully",
            additionalInformation: newUser
          });
        } catch (error) {
          res.status(500).json({
            message: "There was an error while creating the user.",
            error
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        message: "There was an error while searching for duplicated emails",
        error
      });
    }
  }
};
