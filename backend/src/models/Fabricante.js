import { DataTypes, Model } from "sequelize";
import Medicamento from "./Medicamento";


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
    );

        Fabricante.hasMany(Medicamento,{
            onDelete:'RESTRICT',
            onUpdate: 'CASCADE'
        });

    }
}

export default Fabricante;