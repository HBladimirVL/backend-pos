import { Sequelize } from "sequelize";
const baseDatos = new Sequelize("datos_pos", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default baseDatos;
