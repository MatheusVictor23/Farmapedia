import Fabricante from "../models/Fabricante";
import Medicamento from "../models/Medicamento";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect:"sqlite",
    storage:"./src/config/database.sqlite",
    logging:false
});

Fabricante.initModel(sequelize);
Medicamento.initModel(sequelize);

export default sequelize;