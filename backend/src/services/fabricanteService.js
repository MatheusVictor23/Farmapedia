import fabricanteRepository from "../repositories/fabricanteRepository.js";


export const listarFabricantes = async () => {
  try {
    const fabricantes = await fabricanteRepository.findAll();

    const response =  fabricantes.map((fabricante) => ({
        id:fabricante.id,
        nome:fabricante.nome,
        documento:fabricante.documento_registro,
        pais: fabricante.pais
    }));

    return response;
    
  }catch (error) {
    throw new Error("Erro ao listar fabricantes: "+error.message);
  }
};


export const buscarFabricante = async(id) => {
    try{
        const fabricante = await fabricanteRepository.findById(id);

        const response = {
            nome: fabricante.nome,
            documento: fabricante.documento_registro,
            pais: fabricante.pais
        }

        return response;
    
    } catch (error) {
      throw new Error("Erro ao buscar fabricante: "+error.message);
    }
}

export const cadastrarFabricante = async(fabricante) => {
    try{
        const novoFabricante = await fabricanteRepository.create(fabricante);

        const response = {
            nome: novoFabricante.nome,
            documento: novoFabricante.documento_registro,
            pais: novoFabricante.pais
        }

        return response;
    }catch (error) {
        throw new Error("Erro ao criar fabricante: " + error.message);
    }
}

export const atualizarFabricante = async(id,fabricante) => {
    try{
        const fabricanteAtualizado = await fabricanteRepository.update(id,fabricante);

        const response = {
            nome: fabricanteAtualizado.nome,
            documento: fabricanteAtualizado.documento_registro,
            pais: fabricanteAtualizado.pais
        }

        return response;

    }catch (error) {
        throw new Error("Erro ao atualizar fabricante: "+error.message);
    }
}

export const deletarFabricante = async(id) => {
    try{
        
        const fabricanteDeletado = await fabricanteRepository.delete(id);

        return fabricanteDeletado;

    }catch (error) {
        throw new Error("Não foi possível deletar o fabricante: "+error.message);
    }
}