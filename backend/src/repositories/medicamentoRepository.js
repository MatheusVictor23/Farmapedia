import Medicamento from "../models/Medicamento.js";
import Fabricante from "../models/Fabricante.js";
import AppError from "../errors/appError.js";
import tratarErroSequelize from "../errors/tratarErrosSequelize.js";

export default class MedicamentoRepository{
    static async findAll(){
        const medicamentos= await Medicamento.findAll({
            include: {
                model: Fabricante,
                as:"fabricante"
            }
        });

        if(!medicamentos) return null

        return medicamentos;
    }

    static async findById(id){
        const medicamento = await Medicamento.findByPk(id,{
            include: {
                model: Fabricante,
                as:"fabricante"
            }
        });

        if(!medicamento) return null;

        return medicamento;
    }

    static async create(medicamento){

        try{
            const fabricante = await Fabricante.findOne({
                where:{nome: medicamento.fabricante}
            });
    
            if(!fabricante){
                throw new AppError("Fabricante não encontrado", 404);
            }
            
            const novoMedicamento = await Medicamento.create({
                nome_comercial: medicamento.nome,
                principio_ativo: medicamento.principio,
                registro_anvisa: medicamento.registro,
                dosagem: medicamento.dosagem,
                fabricante_id: fabricante.id
            });
    
            return await Medicamento.findByPk(novoMedicamento.id,{
                include: {
                    model: Fabricante,
                    as:"fabricante"
                }
            });
        }catch(error){
            tratarErroSequelize(error);
        }
        

    }

    static async update(id,medicamento){
        try{
            const fabricante = await Fabricante.findOne({
                where:{nome:medicamento.fabricante}
            });
    
            if(!fabricante){
                throw new AppError("Fabricante não encontrado", 404);
            }
    
            const medicamentoEncontrado = await Medicamento.findByPk(id);
    
            if(!medicamentoEncontrado){
                throw new AppError("Medicamento não encontrado", 404)
            }
    
            medicamentoEncontrado.set({
                nome_comercial: medicamento.nome,
                principio_ativo: medicamento.principio,
                registro_anvisa: medicamento.registro,
                dosagem: medicamento.dosagem,
                fabricante_id: fabricante.id
            });
    
            await medicamentoEncontrado.save();
    
            return await Medicamento.findByPk(id, {
                include: {
                    model: Fabricante,
                    as:"fabricante"
                }
            });
        }catch(error){
            tratarErroSequelize(error);
        }
    }

    static async delete(id){
        const medicamento = await Medicamento.findByPk(id);

        if(!medicamento) return null

        await medicamento.destroy();

        return {message: "Medicamento deletado!"}
    }
}
