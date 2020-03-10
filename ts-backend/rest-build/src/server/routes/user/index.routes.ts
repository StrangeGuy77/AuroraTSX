import { Router, Request, Response } from "express";
import { SignUp } from "../../../modules/register/RegisterController";
import { Login } from "../../../modules/login/LoginController";

const router = Router();

router.route("/user")
    .get(() => console.log('send all users.'))
    .post(SignUp)
    .all((req: Request, res: Response) => res.send(`The route "${req.originalUrl}" you're trying to access with the "${req.method.toUpperCase()}" has no available controllers or binded routes`));

router.post('/user/login', Login);

export default router;
