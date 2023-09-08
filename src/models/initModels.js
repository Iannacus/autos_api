// importar todos nuestros modelos
import Auto from "./autos.model.js";
import Brand from "./brands.model.js";
import Country from "./countries.model.js";
import Transmission from "./transmissions.model.js";

const initModels = () => {
  // relacion entre Auto y Marca
  // Un auto pertenece a un marca
  Auto.belongsTo(Brand, { foreignKey: "brandId" });
  // Marca tiene muchos autos
  Brand.hasMany(Auto, { foreignKey: "brandId" });

  // relación entre brand y country
  // Marca pertenece a un pais
  Brand.belongsTo(Country, { foreignKey: "countryId" });
  // Pais tiene muchas marcas
  Country.hasMany(Brand, { foreignKey: "countryId" });

  // Autos y Transmisiones
  // Un auto tiene muchas transmisisones
  Auto.belongsToMany(Transmission, { through: "AutoTransmissions" });
  // Una transmision la pueden tener muchos autos
  Transmission.belongsToMany(Auto, { through: "AutoTransmissions" });
};

export default initModels;
