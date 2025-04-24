import fabricanteRepository from "../repositories/fabricanteRepository.js";
import AppError from "../errors/appError.js";

export const listarFabricantes = async () => {
  const fabricantes = await fabricanteRepository.findAll();

  if (!fabricantes || fabricantes.length == 0) {
    throw new AppError("Não há fabricantes cadastrados", 404);
  }

  return fabricantes.map((fabricante) => ({
    id: fabricante.id,
    nome: fabricante.nome,
    documento: fabricante.documento_registro,
    pais: fabricante.pais
  }));
};

export const buscarFabricante = async (id) => {
  const fabricante = await fabricanteRepository.findById(id);

  if (!fabricante) {
    throw new AppError("Fabricante não encontrado", 404);
  }

  return {
    nome: fabricante.nome,
    documento: fabricante.documento_registro,
    pais: fabricante.pais
  };
};

export const cadastrarFabricante = async (fabricante) => {
  const novoFabricante = await fabricanteRepository.create(fabricante);

  return {
    nome: novoFabricante.nome,
    documento: novoFabricante.documento_registro,
    pais: novoFabricante.pais
  };
};

export const atualizarFabricante = async (id, fabricante) => {
  const fabricanteAtualizado = await fabricanteRepository.update(id, fabricante);

  if(!fabricanteAtualizado){
    throw new Error("Fabricante não encontrado", 404)
  }

  return {
    nome: fabricanteAtualizado.nome,
    documento: fabricanteAtualizado.documento_registro,
    pais: fabricanteAtualizado.pais
  };
};

export const deletarFabricante = async (id) => {
  const resultado = await fabricanteRepository.delete(id);
  
  if(!resultado){
    throw new Error("Fabricante não encontrado");
  }

  return resultado;
};
