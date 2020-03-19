import { Router, Request, Response } from "express";
import { SignUp } from "../../../modules/register/RegisterController";
import { Login } from "../../../modules/login/LoginController";
import { getUsers } from '../../../modules/querying/HomeQueryingController';
import { UpdateUserInfo } from "../../../modules/updating/UserUpdates";

const router = Router();

router.route("/user")
    .get(getUsers)
    .post(SignUp)
    .all((req: Request, res: Response) => res.send(`The route "${req.originalUrl}" you're trying to access with the "${req.method.toUpperCase()}" has no available controllers or binded routes`));

router.post('/user/login', Login);
router.post('/user/update', UpdateUserInfo);
export default router;
