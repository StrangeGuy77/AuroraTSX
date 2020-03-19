import { Request, Response } from "express";
import { User } from "../../entity/User";
import { getManager } from "typeorm";
import * as cloudinary from 'cloudinary';
import * as path from 'path';
import * as fs from 'fs';

export const UpdateUserInfo = async (req: Request, res: Response) => {
    if (!req.query)
    {
        res.json({
            message: "Query is empty! Test something with ?username= or ?userId="
        });
    } else
    {
        if (!req.body)
        {
            res.json({
                message: "You cannot send empty body request for an update!"
            });
        } else
        {

            const { username, userId } = req.query;
            let userExist: User;
            if (username)
            {
                try
                {
                    userExist = await User.findOne({
                        where: {
                            username
                        }
                    });
                } catch (error)
                {
                    console.log(error);
                }
            } else
            {
                try
                {
                    userExist = await User.findOne({
                        where: {
                            id: userId
                        }
                    });
                } catch (error)
                {
                    console.log(error);
                }

            }

            if (req.query.userprofilepic)
            {
                const imageTempPath = req.files[0].path;
                const ext = path.extname(req.files[0].originalname).toLowerCase();


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
                        const response = await cloudinary.v2.uploader.upload(imageTempPath, {});
                        userExist.profilePic = response.secure_url;
                        fs.unlink(imageTempPath, () => null);
                        try
                        {
                            await userExist.save();
                            res.json({
                                message: "Profile pic has been updated.",
                                userExist
                            });
                        } catch (error)
                        {
                            res.json({
                                message: "There was an error while saving pic within database.",
                                error
                            });
                        }
                    } catch (error)
                    {
                        res.json({
                            message: "There was an error while sending pic to cloudinary",
                            error
                        });
                    }
                } else
                {
                    res.json({
                        message: "The image you're trying to upload doesn't meet the requirements for an image. Check extension."
                    });
                }
            } else
            {
                const body = req.body;

                for (var propName in body)
                {
                    if (body[propName] === null || body[propName] === undefined || body[propName] === "")
                    {
                        delete body[propName];
                    }
                }
                const k: any = Object.keys(body);
                const v: any = Object.values(body);
                for (let i = 0; i < k.length; i++)
                {
                    userExist[k[i]] = v[i];
                }

                try
                {
                    const newUser = await getManager().getRepository(User).save(userExist);
                    res.json({
                        message: "User has been succesfully updated.",
                        newUser
                    });
                } catch (error)
                {
                    res.json({
                        message: "There was an error trying to update the user",
                        error
                    });
                }
            }
        }
    }
};

