import {
    listarFabricantes,
    buscarFabricante,
    cadastrarFabricante,
    atualizarFabricante,
    deletarFabricante
} from "../services/fabricanteService.js"


export default class FabricanteController {
    static async listarFabricantes(req, res, next) {
        const fabricantes = await listarFabricantes();
        return res.status(200).json(fabricantes);
    }

    static async buscarFabricante(req, res, next) {
        const id = req.params.id;
        const fabricante = await buscarFabricante(id);
        return res.status(200).json(fabricante);
    }

    static async cadastrarFabricante(req, res, next) {
        const { nome, documento, pais } = req.body;
        const fabricante = { nome, documento, pais };
        
        const novoFabricante = await cadastrarFabricante(fabricante);
        return res.status(200).json(novoFabricante);
    }

    static async atualizarFabricante(req, res, next) {
        const id = req.params.id;
        const { nome, documento, pais } = req.body;
        const fabricante = { nome, documento, pais };
        const fabricanteAtualizado = await atualizarFabricante(id, fabricante);
        return res.status(200).json(fabricanteAtualizado);
    }

    static async deletarFabricante(req, res, next) {
        const id = req.params.id;
        const fabricanteDeletado = await deletarFabricante(id);
        return res.status(200).json(fabricanteDeletado);
    }
}
