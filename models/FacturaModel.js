//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const FacturaModel = db.define("factura", {
  fecha: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default FacturaModel;
