import { DataTypes } from "sequelize";
import db from "../utils/database.js";
// el id se genera solito si lo omitimos
const Country = db.define(
  "countries",
  {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Country;
