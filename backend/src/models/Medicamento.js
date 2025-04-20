import { DataTypes, Model } from 'sequelize';

class Medicamento extends Model{
    static initModel(sequelize){
        Medicamento.init({
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            nome_comercial:{
                type: DataTypes.STRING,
                allowNull: false
            },
            principio_ativo:{
                type:DataTypes.STRING,
                allowNull:false
            },
            registro_anvisa:{
                type:DataTypes.STRING,
                allowNull:false,
                unique:true
            },
            dosagem:{
                type: DataTypes.STRING,
                allowNull:false
            },
           },
           {
            sequelize,
            modelName:"Medicamento",
            tableName: "medicamentos",
            timestamps:true
           }
        )}

    static associate(models) {
        Medicamento.belongsTo(models.Fabricante, {
          foreignKey: 'fabricante_id',
          as: 'fabricante'
        });
      }
}


export default Medicamento;