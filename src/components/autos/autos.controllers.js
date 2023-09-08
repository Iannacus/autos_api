import Auto from "../../models/autos.model.js";
import Brand from "../../models/brands.model.js";
import Country from "../../models/countries.model.js";
import Transmission from "../../models/transmissions.model.js";

const getAllAutos = async (req, res) => {
  // SELECT * FORM autos
  // SELECT id, name, year FROM autos
  try {
    const autos = await Auto.findAll({
      attributes: ["id", "name", "year"],
      include: [
        {
          model: Brand,
          attributes: ["id", "name"],
          include: { model: Country },
        },
        {
          model: Transmission,
          attributes: ["type"],
        },
      ],
    });
    res.json(autos);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getAllAutos };

// 1.- Van construir la relacion entre autos y gamas
// 2.- Van a agregar la gamma del auto a la consulta que realizamos

// mostrar la informacion de marca, transmisión y gama
