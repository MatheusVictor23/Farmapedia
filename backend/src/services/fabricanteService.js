import fabricanteRepository from "../repositories/fabricanteRepository.js";


export const listarFabricantes = async () => {
  try {
    const fabricantes = await fabricanteRepository.findAll();

    if (!fabricantes) {
        return { sucesso: false, mensagem: 'Nenhum fabricante encontrado.' };
      }

    const response =  fabricantes.map((fabricante) => ({
        nome:fabricante.nome,
        documento:fabricante.documento_registro,
        pais: fabricante.pais
    }));

    return { sucesso: true, dados: response };
    
  } catch (error) {
    return { sucesso: false, mensagem: error.message };
  }
};


export const buscarFabricante = async(id) => {
    try{
        const fabricante = await fabricanteRepository.findById(id);

        if(!fabricante){
            return { sucesso: false, mensagem: 'Nenhum fabricante encontrado.' };
        }

        const response = {
            nome: fabricante.nome,
            documento: fabricante.documento_registro,
            pais: fabricante.pais
        }

        return { sucesso: true, dados: response };
    
    } catch (error) {
      return { sucesso: false, mensagem: error.message };
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

        return {sucesso:true, dados:response};
    }catch (error) {
        return { sucesso: false, mensagem: error.message };
    }
}

export const atualizarFabricante = async(id,fabricante) => {
    try{
        const fabricanteAtualizado = await fabricanteRepository.update(id,fabricante);

        if(!fabricanteAtualizado){
            return {sucesso:false, messagem: "Fabricante inexistente!"}
        }

        const response = {
            nome: fabricanteAtualizado.nome,
            documento: fabricanteAtualizado.documento_registro,
            pais: fabricanteAtualizado.pais
        }

        return {sucesso:true,dados:response};

    }catch (error) {
        return {sucesso:false, mensagem: error.message };
    }
}

export const deletarFabricante = async(id) => {
    try{
        
        const fabricanteDeletado = await fabricanteRepository.delete(id);

        if(!fabricanteDeletado){
            return {sucesso:false, messagem: "Fabrincante inexistente"}
        }

        return {sucesso:true,messagem:"Fabricante excluído!"};

    }catch (error) {
        return {sucesso:false, mensagem: error.message };
    }
}