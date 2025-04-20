import { DataTypes, Model } from 'sequelize';
import Medicamento from "./Medicamento.js";


class Fabricante extends Model{
    static initModel(sequelize){
        Fabricante.init({
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            nome:{
                type:DataTypes.STRING,
                allowNull:false
            },
            documento_registro:{
                type:DataTypes.STRING,
                allowNull:false,
                unique:true
            },
            pais:{
                type: DataTypes.STRING,
                allowNull:false
            }
        },
        {
            sequelize,
            modelName:"Fabricante",
            tableName:"fabricantes",
            timestamps:true
        }
    )}

    static associate(models) {
        Fabricante.hasMany(models.Medicamento, {
          foreignKey: 'fabricante_id',
          as: 'medicamentos',
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE'
        });
      }
}

export default Fabricante;