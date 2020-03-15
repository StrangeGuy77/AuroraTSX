import { Request, Response } from "express";
import { User } from "../../entity/User";
import * as bcrypt from "bcryptjs";

export const SignUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username)
  {
    res.json({
      message:
        "Either the body is empty or it left for username, email or password fields."
    });
  } else
  {
    try
    {
      const duplicatedEmail = await User.findOne({
        where: {
          email
        }
      });
      if (duplicatedEmail)
      {
        res.json({
          message: "The email you're trying signup with is already in use."
        });
      } else
      {

        const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        const isValidEmail = emailPattern.test(email);

        if (isValidEmail)
        {
          try
          {
            const hashedPassword = bcrypt.hashSync(password, 10);
            const newUser = User.create({
              email,
              password: hashedPassword,
              username
            });
            try
            {
              await newUser.save();
              newUser.password = "";
              res.json({
                message: "The user was created succesfully",
                newUser,
                code: 200
              });
            } catch (error)
            {
              res.json({
                message: "There was an error trying to save the user.",
                error
              });
            }
          } catch (error)
          {
            res.json({
              message: "There was an error while creating the user.",
              error
            });
          }
        } else
        {
          res.json({
            message: "The email is bad structured. It should match something like... test@test.com"
          });
        }
      }
    } catch (error)
    {
      res.json({
        message: "There was an error while searching for duplicated emails",
        error
      });
    }
  }
};
