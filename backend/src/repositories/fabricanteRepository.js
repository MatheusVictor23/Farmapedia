import Fabricante from "../models/Fabricante.js";

export default class fabricanteRepository{

    static async findAll(){
        try{
            return await Fabricante.findAll();

        }catch(error){
            throw new Error("Erro ao listar fabricantes: "+error.message);
        }
    }

    static async findById(id){
        try{
            return await Fabricante.findByPk(id);
        }catch(error){
            throw new Error("Erro ao listar fabricante: "+error.message);
        }
    }

    static async create(fabricante){
        try{

            const documentoDuplicado = await Fabricante.findOne({
                where:{documento_registro: novoFabricante.documento}
            });

            if(documentoDuplicado){
                throw new Error("Já existe um fabricante cadastro com esse documento!")
            }

            const novoFabricante = await Fabricante.create({
                nome: fabricante.nome,
                documento_registro:fabricante.documento,
                pais: fabricante.pais
            });

            return await Fabricante.findByPk(novoFabricante.id)

        }catch(error){
            throw new Error("Erro ao criar fabricante: "+error.message);
        }
    }

    static async update(id, fabricante){
        try{
            const fabricanteEncontrado = await Fabricante.findByPk(id);

            if(!fabricanteEncontrado){
                throw new Error("Fabricante não encontrado!");
            }
    
            fabricanteEncontrado.set({
                nome: fabricante.nome,
                documento_registro: fabricante.documento,
                pais: fabricante.pais
            });
    
            await fabricanteEncontrado.save();

            return await Fabricante.findByPk(fabricanteEncontrado.id);

        }catch(error){
            throw new Error("Erro ao atualizar fabricante: "+error.message);
        }
    }


    static async delete(id){
        try{
            const fabricanteEncontrado = await Fabricante.findByPk(id);

            if(!fabricanteEncontrado){
                throw new Error("Fabricante não encontrado!");
            }
    
            await fabricanteEncontrado.destroy();

            return {message: "Fabricante deletado com sucesso!"}
        }catch(error){
            throw new Error("Erro ao deletar fabricante: "+error.message);
        }
    }
}