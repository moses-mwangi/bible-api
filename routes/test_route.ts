import { Router } from "express";
import { test } from "../controllers/test_controller";

const router = Router();

router.route("/test").get(test);

export default router;
