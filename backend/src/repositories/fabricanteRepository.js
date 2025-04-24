import Fabricante from "../models/Fabricante.js";
import tratarErrosSequelize from "../errors/tratarErrosSequelize.js";

export default class fabricanteRepository{

    static async findAll(){

        const fabricantes = await Fabricante.findAll();

        if(!fabricantes) return null;

        return fabricantes;

    }

    static async findById(id){

        const fabricante = await Fabricante.findByPk(id);

        if(!fabricante) return null;

        return fabricante;
    }

    static async create(fabricante){

        try{
            const novoFabricante = await Fabricante.create({
                nome: fabricante.nome,
                documento_registro:fabricante.documento,
                pais: fabricante.pais
            });
    
            return await Fabricante.findByPk(novoFabricante.id)
        }catch(error){
            tratarErrosSequelize(error);
        }
    }

    static async update(id, fabricante){

        try{
            const fabricanteEncontrado = await Fabricante.findByPk(id);
    
            if(!fabricanteEncontrado) return null;
    
            fabricanteEncontrado.set({
                nome: fabricante.nome,
                documento_registro: fabricante.documento,
                pais: fabricante.pais
            });
    
            await fabricanteEncontrado.save();
    
            return await Fabricante.findByPk(fabricanteEncontrado.id);

        }catch(error){
            tratarErrosSequelize(error);
        }

    }


    static async delete(id){

        try{
            const fabricanteEncontrado = await Fabricante.findByPk(id);
    
            if(!fabricanteEncontrado) return null;
    
            await fabricanteEncontrado.destroy();
    
            return {message:"Fabricante deletado!"}
        }catch(error){
            tratarErrosSequelize(error);
        }

    }
}