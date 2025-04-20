import {Datatypes, Model} from "sequelize";

class Medicamento extends Model{
    static initModel(sequelize){
        Medicamento.init({
            id:{
                type: Datatypes.INTERGER,
                primaryKey: true,
                autoIncrement:true
            },
            nome_comercial:{
                type: Datatypes.STRING,
                allowNull: false
            },
            principio_ativo:{
                type:Datatypes.STRING,
                allowNull:false
            },
            registro_anvisa:{
                type:Datatypes.STRING,
                allowNull:false,
                unique:true
            },
            dosagem:{
                type: Datatypes.STRING,
                allowNull:false
            },
           },
           {
            sequelize,
            modelName:"Medicamento",
            tableName: "medicamentos",
            timestamps:true
           }
        );

        Medicamento.belongsTo(Fabricante,{
            foreignKey: fabricante_id,
            as: "fabricante"
        })
    }
}


export default Medicamento;