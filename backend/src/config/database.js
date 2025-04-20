import Sequelize from 'sequelize';
import Fabricante from '../models/Fabricante.js';
import Medicamento from '../models/Medicamento.js';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/config/database.sqlite',
  logging:false
});

Fabricante.initModel(sequelize);
Medicamento.initModel(sequelize);

Fabricante.associate({ Medicamento });
Medicamento.associate({ Fabricante });

export default sequelize;