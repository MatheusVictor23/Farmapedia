import Fabricante from "../models/Fabricante.js";

export const listarFabricantes = async(req,res) => {
    try{
        const fabricantes = await Fabricante.findAll();

        const response = fabricantes.map((fabricante) => ({
            id: fabricante.id,
            nome: fabricante.nome,
            documento: fabricante.documento_registro,
            pais: fabricante.pais
        }));

        return res.status(200).json({response});
    }catch(error){
        return res.status(400).json({error: "Erro ao listar fabricantes: " + error.message})
    }
}


export const buscarFabricante = async(req,res) => {
    const id = req.params.id;

    try{
        const fabricanteEncontrado = await Fabricante.findByPk(id);
    
        if(!fabricanteEncontrado){
            return res.status(404).send("Fabricante inexistente");
        }

        const response = {
            id: fabricanteEncontrado.id,
            nome: fabricanteEncontrado.nome,
            documento: fabricanteEncontrado.documento_registro,
            pais: fabricanteEncontrado.pais
        }

        return res.status(200).json({response});

    }catch(error){
       return res.status(400).json({error: "Erro ao encontrar fabricante: " + error.message});
    }
}


export const cadastrarFabricante = async(req,res) => {
    
    const {nome, documento, pais} = req.body;

    try{
        const novoFabricante = await Fabricante.create({
            nome: nome,
            document_registro: documento,
            pais: pais
        });

        const response = {
            nome: novoFabricante.nome,
            documento: novoFabricante.document_registro,
            pais: novoFabricante.pais
        }

        return res.status(201).json(response);

    }catch(error){
        return res.status(400).json({error:"Erro ao criar fabricante!"});
    }
}

export const atualizarFabricante = async(req,res) => {
    const id = req.params.id;

    const {nome, documento, pais} = req.body;

    try{
        
        const fabricanteEncontrado = await Fabricante.findByPk(id);

        if(!fabricanteEncontrado){
            return res.status(404).send("Fabricante inexistente!");
        }

        fabricanteEncontrado.set({
            nome:nome,
            documento_registro:documento,
            pais:pais
        });

        const response = {
            nome: fabricanteEncontrado.nome,
            documento: fabricanteEncontrado.document_registro,
            pais: fabricanteEncontrado.pais
        }

        await fabricanteEncontrado.save();

        return res.status(200).json(response);

    }catch(error){
        return res.status(400).json({error:"Erro ao atualizar fabricante: "+ error.message});
    }
}


export const deletarFabricante = async(req,res) => {
    const id = req.params.id;

    try{
        const fabricanteEncontrado = await Fabricante.findByPk(id);

        if(!fabricanteEncontrado){
            return res.status(404).send("Fabricante inexistente!");
        }

        fabricanteEncontrado.destroy();

        return res.status(200).send("Fabricante Excluído!");

    }catch(error){
        return res.status(400).json({error: "Erro ao deletar fabricante!" + error.message})
    }
}