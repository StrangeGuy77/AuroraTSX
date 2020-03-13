import { Request, Response } from 'express';
import { User } from '../../entity/User';
import * as bcrypt from 'bcryptjs';

export const Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password)
    {
        res.json({
            message: "There are fields that are compulsory for login and are not within the body. Check email or password fields.",
            code: 400
        });
    } else
    {
        const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        const isValidEmail = emailPattern.test(email);
        if (!isValidEmail)
        {
            res.json({
                message: "The email you've sent is not valid. Check the correct email structuration: test@test.com",
                code: 400
            });
        } else
        {
            const isValidUser = await User.findOne({
                where: {
                    email
                }
            });
            if (!isValidUser)
            {
                res.json({
                    message: "Incorrect email or password",
                    code: 400
                });
            } else
            {
                const isValidLogin = bcrypt.compareSync(password, isValidUser.password);
                if (!isValidLogin)
                {
                    res.json({
                        message: "Incorrect email or password",
                        code: 400
                    });
                } else
                {
                    isValidUser.password = "";
                    res.json({
                        message: "Succesfully logged in",
                        userData: isValidUser,
                        code: 200
                    });
                }
            }
        }
    }
};