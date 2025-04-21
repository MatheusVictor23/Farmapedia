import MedicamentoService from "../services/medicamentoService.js";

export default class MedicamentoController{
    static async listarMedicamentos(req,res){
        try{
            const medicamentos = await MedicamentoService.listarMedicamentos();

            if(medicamentos.sucesso == false){
                return res.status(400).json({error:"Error controller: "+medicamentos.message+ ", "})
            }

            return res.status(200).json(medicamentos.dados);
        }catch(error){
            return res.status(200).json({error:"Error Controller: "+error.message});
        }
    }
    static async buscarMedicamento(req,res){

        const id = req.params.id;
        try{
            const medicamento = await MedicamentoService.buscarMedicamento(id);

            if(medicamento.sucesso == false){
                return res.status(400).json({error: "Error controller: "+medicamento.message + ", "})
            }

            return res.status(200).json(medicamento.dados)
        }catch(error){
            return res.status(200).json({error:"Error Controller: "+error.message});
        }
    }

    static async cadastrarMedicamento(req,res){

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

            if(novoMedicamento.sucesso == false){
                return res.status(400).json({error: "Error controller: "+novoMedicamento.message})
            }

            return res.status(200).json(novoMedicamento.dados)

        }catch(error){
            return res.status(200).json({error:"Error Controller: " + error.message + ", "});
        }
    }

    static async atualizarMedicamento(req,res){
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

            if(medicamentoAtualizado.sucesso == false){
                return res.status(400).json({error: "Error controller: "+medicamentoAtualizado.message  + ", "})
            }

            return res.status(200).json(medicamentoAtualizado.dados)
        }catch(error){
            return res.status(200).json({error:"Error Controller: "+error.message});
        }
    }

    static async deletarMedicamento(req,res){

        const id = req.params.id;
        try{
            const medicamentoDeletado = await MedicamentoService.deletarMedicamento(id);

            if(medicamentoDeletado.sucesso == false){
                return res.status(400).send(medicamentoDeletado.message);
            }

            return res.status(200).send(medicamentoDeletado.message);

        }catch(error){
            return res.status(200).json({error:"Error Controller: "+error.message});
        }
    }
}