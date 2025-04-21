import MedicamentoRepository from "../repositories/medicamentoRepository.js";

export default class MedicamentoService {
  static async listarMedicamentos() {
    try {
      const medicamentos = await MedicamentoRepository.findAll();

      const response = medicamentos.map((medicamento) => ({
        id: medicamento.id,
        nome: medicamento.nome_comercial,
        principio: medicamento.principio_ativo,
        registro: medicamento.registro_anvisa,
        dosagem: medicamento.dosagem,
        fabricante: medicamento.fabricante.nome
      }));

      return response; 
    } catch (error) {
      throw new Error("Erro ao listar medicamentos: " + error.message);
    }
  }

  static async buscarMedicamento(id) {
    try {
      const medicamento = await MedicamentoRepository.findById(id);

      if (!medicamento) {
        throw new Error("Medicamento não encontrado!");
      }

      const response = {
        id:medicamento.id,
        nome: medicamento.nome_comercial,
        principio: medicamento.principio_ativo,
        registro: medicamento.registro_anvisa,
        dosagem: medicamento.dosagem,
        fabricante: medicamento.fabricante.nome
      };

      return response;
    } catch (error) {
      throw new Error("Erro ao buscar medicamento: " + error.message);
    }
  }

  static async cadastrarMedicamento(medicamento) {
    try {
      const novoMedicamento = await MedicamentoRepository.create(medicamento);

      const response = {
        id:novoMedicamento.id,
        nome: novoMedicamento.nome_comercial,
        principio: novoMedicamento.principio_ativo,
        registro: novoMedicamento.registro_anvisa,
        dosagem: novoMedicamento.dosagem,
        fabricante: novoMedicamento.fabricante.nome
      };

      return response;

    } catch (error) {
      throw new Error("Erro ao cadastrar medicamento: " + error.message);
    }
  }

  static async atualizarMedicamento(id, medicamento) {
    try {
      const medicamentoAtualizado = await MedicamentoRepository.update(id, medicamento);

      const response = {
        id:medicamentoAtualizado.id,
        nome: medicamentoAtualizado.nome_comercial,
        principio: medicamentoAtualizado.principio_ativo,
        registro: medicamentoAtualizado.registro_anvisa,
        dosagem: medicamentoAtualizado.dosagem,
        fabricante: medicamentoAtualizado.fabricante.nome
      };

      return response;

    } catch (error) {
      throw new Error("Erro ao atualizar medicamento: " + error.message);
    }
  }

  static async deletarMedicamento(id) {
    try {
      const resposta = await MedicamentoRepository.delete(id);
      return resposta;
    } catch (error) {
      throw new Error("Erro ao deletar medicamento: " + error.message);
    }
  }
}
