import MedicamentoRepository from "../repositories/medicamentoRepository.js";

export default class MedicamentoService {
  static async listarMedicamentos() {
    try {
      const medicamentos = await MedicamentoRepository.findAll();

      if (!medicamentos || medicamentos.length === 0) {
        return { sucesso: false, mensagem: "Não há medicamentos cadastrados!" };
      }

      const response = medicamentos.map((medicamento) => ({
        nome: medicamento.nome_comercial,
        principio: medicamento.principio_ativo,
        registro: medicamento.registro_anvisa,
        dosagem: medicamento.dosagem,
        fabricante: medicamento.fabricante.nome,
      }));

      return { sucesso: true, dados: response };
    } catch (error) {
      return { sucesso: false, mensagem: "Error Service: " + error.message };
    }
  }

  static async buscarMedicamento(id) {
    try {
      const medicamento = await MedicamentoRepository.findById(id);

      if (!medicamento) {
        return { sucesso: false, mensagem: "Medicamento não encontrado!" };
      }

      const response = {
        nome: medicamento.nome_comercial,
        principio: medicamento.principio_ativo,
        registro: medicamento.registro_anvisa,
        dosagem: medicamento.dosagem,
        fabricante: medicamento.fabricante.nome,
      };

      return { sucesso: true, dados: response };
    } catch (error) {
      return { sucesso: false, mensagem: "Service error: " + error.message };
    }
  }

  static async cadastrarMedicamento(medicamento) {
    try {
      const novoMedicamento = await MedicamentoRepository.create(medicamento);

      const response = {
        nome: novoMedicamento.nome_comercial,
        principio: novoMedicamento.principio_ativo,
        registro: novoMedicamento.registro_anvisa,
        dosagem: novoMedicamento.dosagem,
        fabricante: novoMedicamento.fabricante.nome,
      };

      return { sucesso: true, dados: response };
    } catch (error) {
      return { sucesso: false, mensagem: "Não foi possível cadastrar o medicamento!" };
    }
  }

  static async atualizarMedicamento(id, medicamento) {
    try {
      const medicamentoAtualizado = await MedicamentoRepository.update(id, medicamento);

      const response = {
        nome: medicamentoAtualizado.nome_comercial,
        principio: medicamentoAtualizado.principio_ativo,
        registro: medicamentoAtualizado.registro_anvisa,
        dosagem: medicamentoAtualizado.dosagem,
        fabricante: medicamentoAtualizado.fabricante.nome,
      };

      return { sucesso: true, dados: response };
    } catch (error) {
      return { sucesso: false, mensagem: "Não foi possível atualizar o medicamento!" };
    }
  }

  static async deletarMedicamento(id) {
    try {
      await MedicamentoRepository.delete(id);
      return { sucesso: true, mensagem: "Medicamento deletado!" };
    } catch (error) {
      return { sucesso: false, mensagem: "Não foi possível deletar o medicamento!" };
    }
  }
}
