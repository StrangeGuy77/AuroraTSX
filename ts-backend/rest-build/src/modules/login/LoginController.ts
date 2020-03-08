import { Request, Response } from 'express';
import { User } from '../../entity/User';
import * as bcrypt from 'bcryptjs';

export const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password)
    {
        res.status(400).json({
            message: "There are fields that are compulsory for login and are not within the body. Check email or password fields."
        });
    } else
    {
        const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        const isValidEmail = emailPattern.test(email);
        if (!isValidEmail)
        {
            res.status(400).json({
                message: "The email you've sent is not valid. Check the correct email structuration: test@test.com"
            });
        } else
        {
            const isValidUser = await User.findOneOrFail({
                where: {
                    email
                }
            });
            if (!isValidUser)
            {
                res.status(400).json({
                    message: "Incorrect email or password"
                });
            } else
            {
                const isValidLogin = bcrypt.compareSync(password, isValidUser.password);
                if (!isValidLogin)
                {
                    res.status(400).json({
                        message: "Incorrect email or password"
                    });
                } else
                {
                    isValidUser.password = "";
                    res.status(400).json({
                        message: "Succesfully logged in",
                        userData: isValidUser
                    });
                }
            }
        }
    }
};