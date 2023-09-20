//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const FacturaModel = db.define(
  "factura",
  {
    fecha: { type: DataTypes.DATE },
    monto: { type: DataTypes.REAL },
    cliente: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);

export default FacturaModel;
