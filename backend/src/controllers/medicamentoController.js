import MedicamentoService from "../services/medicamentoService.js";

export default class MedicamentoController {
    static async listarMedicamento(req,res,next){
        const medicamentos = await MedicamentoService.listarMedicamentos();
        return res.status(200).json(medicamentos);
    }

    static async buscarMedicamento(req,res,next){
        const id = req.params.id;
        const medicamento = await MedicamentoService.buscarMedicamento(id);
        return res.status(200).json(medicamento);
    }

    static async cadastrarMedicamento(req,res,next){
        const {nome,principio,registro,dosagem,fabricante} = req.body;

        const medicamento = {
            nome:nome,
            principio:principio,
            registro:registro,
            dosagem:dosagem,
            fabricante:fabricante
        }

        const novoMedicamento = await MedicamentoService.cadastrarMedicamento(medicamento);
        return res.status(200).json(novoMedicamento);
    }

    static async atualizarMedicamento(req,res,next){
        const id = req.params.id;
        const {nome,principio,registro,dosagem,fabricante} = req.body;

        const medicamento = {
            nome,
            principio,
            registro,
            dosagem,
            fabricante
        }

        const medicamentoAtualizado = await MedicamentoService.atualizarMedicamento(id,medicamento);
        return res.status(200).json(medicamentoAtualizado);
    }

    static async deletarMedicamento(req,res,next){
        const id = req.params.id;
        
        const medicamentoDeletado = await MedicamentoService.deletarMedicamento(id);
        return res.status(200).json(medicamentoDeletado);
    }

}