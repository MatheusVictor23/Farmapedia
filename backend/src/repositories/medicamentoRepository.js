import Fabricante from "../models/Fabricante.js";
import Medicamento from "../models/Medicamento.js";


export default class MedicamentoRepository {
    static async findAll(){
        return await Medicamento.findAll({
            include:{
                model:Fabricante,
                as:"fabricante"
            }
        });
    }

    static async findById(id){
        return await Medicamento.findByPk(id,{
            include:{
                model:Fabricante,
                as:"fabricante"
            }
        });
    }


    static async create(medicamento) {
        const fabricanteEncontrado = await Fabricante.findOne({
          where: { nome: medicamento.nome }
        });
      
        if (!fabricanteEncontrado) {
          throw new Error("Fabricante não encontrado");
        }
      
        const novoMedicamento = await Medicamento.create({
          nome_comercial: medicamento.nome,
          principio_ativo: medicamento.principio,
          registro_anvisa: medicamento.registro,
          dosagem: medicamento.dosagem,
          fabricante_id: fabricanteEncontrado.id
        });
      
        return await Medicamento.findByPk(novoMedicamento.id, {
          include: {
            model: Fabricante,
            as: "fabricante"
          }
        });
      }
      
      static async update(id, medicamento) {
        const medicamentoEncontrado = await Medicamento.findByPk(id);
      
        if (!medicamentoEncontrado) {
          throw new Error("Medicamento não encontrado");
        }
      
        const fabricanteEncontrado = await Fabricante.findOne({
          where: { nome: medicamento.fabricante }
        });
      
        if (!fabricanteEncontrado) {
          throw new Error("Fabricante não encontrado!");
        }
      
        medicamentoEncontrado.set({
          nome_comercial: medicamento.nome,
          principio_ativo: medicamento.principio,
          registro_anvisa: medicamento.registro,
          dosagem: medicamento.dosagem,
          fabricante_id: fabricanteEncontrado.id
        });
      
        await medicamentoEncontrado.save();
      
        return await Medicamento.findByPk(medicamentoEncontrado.id, {
          include: {
            model: Fabricante,
            as: "fabricante"
          }
        });
      }
      

    static async delete(id){
        const medicamentoEncontrado = await Medicamento.findByPk(id);

        if(!medicamentoEncontrado){
            throw new Error("Medicamento não encontrado!");
        }

        return await medicamentoEncontrado.destroy();
    }
}