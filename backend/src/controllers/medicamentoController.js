import MedicamentoService from "../services/medicamentoService.js";

export default class MedicamentoController{
    static async listarMedicamentos(req, res, next){
        try{
            const medicamentos = await MedicamentoService.listarMedicamentos();

            return res.status(200).json(medicamentos);
        }catch (erro) {
            next(erro); 
        }
    }
    static async buscarMedicamento(req, res, next){

        const id = req.params.id;
        try{
            const medicamento = await MedicamentoService.buscarMedicamento(id);

            return res.status(200).json(medicamento)
        }catch (erro) {
            next(erro); 
        }
    }

    static async cadastrarMedicamento(req,res,next){

        const {nome,principio,registro,dosagem,fabricante} = req.body;

        try{

            const medicamento = {
                nome: nome,
                principio:principio,
                registro:registro,
                dosagem:dosagem,
                fabricante:fabricante
            }

            const novoMedicamento = await MedicamentoService.cadastrarMedicamento(medicamento);

            return res.status(200).json(novoMedicamento)

        }catch (erro) {
            next(erro); 
        }
    }

    static async atualizarMedicamento(req,res,next){
        const {nome,principio,registro,dosagem,fabricante} = req.body;
        const id = req.params.id;

        const medicamento = {
            nome: nome,
            principio:principio,
            registro:registro,
            dosagem:dosagem,
            fabricante:fabricante
        }

        try{
            const medicamentoAtualizado = await MedicamentoService.atualizarMedicamento(id,medicamento);

            return res.status(200).json(medicamentoAtualizado)
        }catch (erro) {
            next(erro); 
        }
    }

    static async deletarMedicamento(req,res,next){

        const id = req.params.id;
        try{
            const medicamentoDeletado = await MedicamentoService.deletarMedicamento(id);

            return res.status(200).send(medicamentoDeletado.message);

        }catch (erro) {
            next(erro); 
        }
    }
}