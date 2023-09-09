import express from "express";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import autosRoutes from "./components/autos/autos.routes.js";

initModels();

db.authenticate()
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch((e) => console.log(e));

db.sync() // borra toda la base datos y la vuelve a crear
  .then(() => console.log("base de datos sync"))
  .catch((e) => console.log(e));

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());

app.use(autosRoutes);

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
