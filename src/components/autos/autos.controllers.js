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

const createAuto = async (req, res) => {
  try {
    // destrucurando el body de la petición
    // {name, year, brandId, transmission} = req.body
    const { transmission, ...auto } = req.body; // rest operator
    // MT AT
    const [newAuto, created] = await Auto.findOrCreate({
      where: { name: auto.name },
      defaults: auto,
    });
    // const newAuto = await Auto.create(auto);
    const autoTransmission = await Transmission.findOne({
      where: { type: transmission },
    });
    // if (!autoTransmission && created) {
    //   await Auto.destroy({ where: { id: newAuto.id } });
    //   return res.status(400).json({ error: "lasñdkfjasdklfjsdkl" });
    // }
    await newAuto.addTransmission(autoTransmission);
    res.status(201).end();
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const deleteAuto = async (req, res) => {
  try {
    const { id } = req.params;
    await Auto.destroy({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getAllAutos, createAuto, deleteAuto };

// 1.- Van construir la relacion entre autos y gamas
// 2.- Van a agregar la gamma del auto a la consulta que realizamos

// mostrar la informacion de marca, transmisión y gama
