import { Router } from "express";
import { getAllAutos, createAuto, deleteAuto } from "./autos.controllers.js";

const router = Router();
// construir un endpoint para agreagar un auto nuevo a la base de datos
// La información que se debe enviar es la siguiente:
// name, year, brandId, transmission

router.route("/autos").get(getAllAutos).post(createAuto);

router.route("/autos/:id").delete(deleteAuto);

export default router;
