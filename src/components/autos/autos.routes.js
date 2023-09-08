import { Router } from "express";
import { getAllAutos } from "./autos.controllers.js";

const router = Router();

router.get("/autos", getAllAutos);

export default router;
