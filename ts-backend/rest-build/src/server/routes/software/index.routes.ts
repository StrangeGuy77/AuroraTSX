import { Router } from "express";
import { getRecentSoftwares } from "../../../modules/querying/HomeQueryingController";
import { uploadSoftware } from "../../../modules/upload/UploadController";

const router = Router();

router.route("/softwares").get(getRecentSoftwares);

router.route("/softwares/:userId").post(uploadSoftware);

export default router;
