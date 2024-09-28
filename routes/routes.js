import Router from "express";
import connected from "../controller/conntected.js";

const router = Router();

router.post("/contact", connected);

export default router;
