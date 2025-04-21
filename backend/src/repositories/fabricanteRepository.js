import Fabricante from "../models/Fabricante.js";

export default class fabricanteRepository{
    static async findAll(){
        return await Fabricante.findAll();
    }

    static async findById(id){
        return await Fabricante.findByPk(id);
    }

    static async create(novoFabricante){
        return await Fabricante.create({
            nome: novoFabricante.nome,
            documento_registro:novoFabricante.documento,
            pais: novoFabricante.pais
        });
    }

    static async update(id, fabricanteAtualizado){
        const fabricanteEncontrado = await Fabricante.findByPk(id);

        fabricanteEncontrado.set({
            nome: fabricanteAtualizado.nome,
            documento_registro: fabricanteAtualizado.documento,
            pais: fabricanteAtualizado.pais
        });

        await fabricanteEncontrado.save();
        return 
    }


    static async delete(id){
        const fabricanteEncontrado = await Fabricante.findByPk(id);

        return await fabricanteEncontrado.destroy();
    }
}