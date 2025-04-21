import {
    listarFabricantes,
    buscarFabricante,
    cadastrarFabricante,
    atualizarFabricante,
    deletarFabricante
} from "../services/fabricanteService.js"


export default class FabricanteController {
    static async listarFabricantes(req,res){
        try{
            const fabricantes = await listarFabricantes();

            if(!fabricantes.sucesso){
                return res.status(404).json({ error: fabricantes.mensagem });
            }

            return res.status(200).json(fabricantes.dados);

        }catch(error){
            return res.status(400).json({error:"Erro ao listar fabricantes: "+error.message})
        }
    }

    static async buscarFabricante(req,res){

        const id = req.params.id
        try{

            const fabricante = await buscarFabricante(id);

            if(!fabricante.sucesso){
                return res.status(404).json({error: fabricante.mensagem})
            }

            return res.status(200).json(fabricante.dados);

        }catch(error){
            res.status(400).json({error:"Erro ao listar fabricante: "+error.message});
        }
    }

    static async cadastrarFabricante(req,res){

        const {nome,documento,pais} = req.body;

        try{
            const fabricante = {
                nome:nome,
                documento:documento,
                pais:pais
            }

            const novoFabricante = await cadastrarFabricante(fabricante);

            return res.status(200).json(novoFabricante.dados);

        }catch(error){
            res.status(400).json({error:"Erro ao listar fabricante: "+error.message});
        }
    }

    static async atualizarFabricante(req,res){
        const id = req.params.id;
        const {nome,documento,pais} = req.body;
        
        try{
            const fabricante = {
                nome:nome,
                documento:documento,
                pais:pais
            }

            const fabricanteAtualizado = await atualizarFabricante(id,fabricante);

            if(!fabricanteAtualizado.sucesso){
                return res.status(200).json(fabricanteAtualizado.mensagem);
            }

            return res.status(200).json(fabricanteAtualizado.dados);

        }catch(error){
            res.status(400).json({error:"Erro ao listar fabricante: "+error.message});
        }
    }

    static async deletarFabricante(req,res){
        const id = req.params.id;

        try{
            const fabricanteDeletado = await deletarFabricante(id);

            if(!fabricanteDeletado.sucesso){
                return res.status(200).json(fabricanteDeletado.mensagem);
            }

            return res.status(200).json(fabricanteDeletado.mensagem);

        }catch(error){
            res.status(400).json({error:"Erro ao listar fabricante: "+error.message});
        }
    }
}