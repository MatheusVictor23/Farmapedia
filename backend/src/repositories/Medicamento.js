import Medicamento from "../models/Medicamento.js";
import Fabricante from "../models/Fabricante.js";


export const listarMedicamentos = async(req,res) => {
    try{
        const medicamentos = await Medicamento.findAll({
            include:{
                model:Fabricante,
                as:"fabricante"
            }
        });

        const response = medicamentos.map((medicamento) => ({
            nome: medicamento.nome_comercial,
            principio: medicamento.principio_ativo,
            registro: medicamento.registro_anvisa,
            dosagem: medicamento.dosagem,
            fabricante: medicamento.fabricante.nome
        }));

        return res.status(200).json(response);

    }catch(error){
        return res.status(200).json({error:"Erro ao listar Medicamentos: "+error.message});
    }
}

export const buscarMedicamento = async(req,res) => {
    const id = req.params.id;

    try{
        const medicamentoEncontrado = await Medicamento.findByPk(id,{
            include:{
                model:Fabricante,
                as:"fabricante"
            }
        });

        const response = {
            nome: medicamentoEncontrado.nome_comercial,
            principio: medicamentoEncontrado.principio_ativo,
            registro: medicamentoEncontrado.registro_anvisa,
            dosagem: medicamentoEncontrado.dosagem,
            fabricante: medicamentoEncontrado.fabricante.nome
        }

        return res.status(200).json(response);

    }catch(error){
        return res.status(200).json({error:"Erro ao listar Medicamento: "+error.message});
    }
}

export const cadastrarMedicamento = async(req,res) => {
    const {nome,principio,registro,dosagem,fabricante} = req.body;

    try{
        
        const fabricanteEncontrado = await Fabricante.findOne({
            where:{nome:fabricante}
        });

        if(!fabricanteEncontrado){
            return res.status(404).send("Fabricante não encontrado!")
        }

        const novoMedicamento = await Medicamento.create({
            nome_comercial:nome,
            principio_ativo:principio,
            registro_anvisa:registro,
            dosagem:dosagem,
            fabricante_id: fabricanteEncontrado.id
        })


        const response = {
            nome: novoMedicamento.nome_comercial,
            principio: novoMedicamento.principio_ativo,
            registro: novoMedicamento.registro_anvisa,
            dosagem: novoMedicamento.dosagem,
            fabricante: fabricanteEncontrado.nome
        }

        return res.status(200).json(response);

    }catch(error){
        return res.status(400).json({error:"Erro ao criar Medicamento: "+error.message});
    }
}


export const atualizarMedicamento = async(req,res) => {
    const id = req.params.id;
    const {nome,principio,registro,dosagem,fabricante} = req.body;

    try{
        const medicamentoEncontrado = await Medicamento.findOne({
            include:{
                model:Fabricante,
                as:"fabricante"
            }
        });

        const fabricanteEncontrado = await Fabricante.findOne({
            where:{nome:fabricante}
        });
        
        if(!medicamentoEncontrado){
            return res.status(404).send("Medicamento inexistente!");
        }

        if(!fabricanteEncontrado){
            return res.status(404).send("Fabricante inexistente!");
        }


        medicamentoEncontrado.set({
            nome_comercial:nome,
            principio_ativo:principio,
            registro_anvisa:registro,
            dosagem:dosagem,
            fabricante_id: fabricanteEncontrado.id
        });

        const response = {
            nome: medicamentoEncontrado.nome_comercial,
            principio: medicamentoEncontrado.principio_ativo,
            registro: medicamentoEncontrado.registro_anvisa,
            dosagem: medicamentoEncontrado.dosagem,
            fabricante: medicamentoEncontrado.fabricante.nome
        }

        await medicamentoEncontrado.save();

        return res.status(200).json(response);

    }catch(error){
        return res.status(200).json({error:"Erro ao atualizar Medicamento: "+error.message});
    }
}


export const deletarMedicamento = async(req,res) => {
    const id = req.params.id;

    try{
        const medicamentoEncontrado = await Medicamento.findByPk(id);

        if(!medicamentoEncontrado){
            return res.status(404).send("Medicamento não encontrado!");
        }

        medicamentoEncontrado.destroy();

        return res.status(200).send("Medicamento excluído!");

    }catch(error){
        return res.status(400).json({error:"Erro ao deletar medicamento: "+error});
    }
}