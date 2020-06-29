import { Request, Response } from "express";
import { User } from "../../entity/User";
import * as bcrypt from "bcryptjs";
import { EmailRegexValidator } from "../../validators/regex";

export const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message:
          "There are fields that are compulsory for login and are not within the body. Check email or password fields.",
      });
    } else {
      const isValidEmail = EmailRegexValidator.test(email);
      if (!isValidEmail) {
        return res.status(400).json({
          message:
            "The email you've sent is not valid. Check the correct email structuration: test@test.com",
        });
      } else {
        const isValidUser = await User.findOne({
          where: {
            email,
          },
        });
        if (!isValidUser) {
          return res.status(401).json({
            message: "Incorrect email or password",
          });
        } else {
          const isValidLogin = bcrypt.compareSync(
            password,
            isValidUser.password
          );
          if (!isValidLogin) {
            return res.status(401).json({
              message: "Incorrect email or password",
            });
          } else {
            delete isValidUser.password;
            return res.status(200).json({
              message: "Succesfully logged in",
              userData: isValidUser,
            });
          }
        }
      }
    }
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
