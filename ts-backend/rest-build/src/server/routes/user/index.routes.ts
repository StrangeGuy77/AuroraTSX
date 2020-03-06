import { Router } from "express";
import { SignUp } from "../../../modules/register/RegisterController";

const router = Router();

router.route("/user").post(SignUp);

export default router;
