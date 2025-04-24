import MedicamentoRepository from "../repositories/medicamentoRepository.js";
import AppError from "../errors/appError.js";

export default class MedicamentoService{
    static async listarMedicamentos(){
        const medicamentos = await MedicamentoRepository.findAll();

        if(!medicamentos || medicamentos.length === 0){
            throw new AppError("Não há medicamentos cadastrados!", 404);
        }

        return medicamentos.map((medicamento) => ({
            id: medicamento.id,
            nome: medicamento.nome_comercial,
            principio: medicamento.principio_ativo,
            registro: medicamento.registro_anvisa,
            fabrincante: medicamento.fabricante.nome
        }));
    }

    static async buscarMedicamento(id){
        const medicamento = await MedicamentoRepository.findById(id);

        if(!medicamento){
            throw new AppError("Medicamento não encontrado", 404);
        }

        return {
            id: medicamento.id,
            nome: medicamento.nome_comercial,
            principio: medicamento.principio_ativo,
            registro: medicamento.registro_anvisa,
            dosagem: medicamento.dosagem,
            fabricante: medicamento.fabricante.nome
        }
    }

    static async cadastrarMedicamento(medicamento){
        const novoMedicamento = await MedicamentoRepository.create(medicamento);

        return {
            id: novoMedicamento.id,
            nome: novoMedicamento.nome_comercial,
            principio: novoMedicamento.principio_ativo,
            registro: novoMedicamento.registro_anvisa,
            dosagem: novoMedicamento.dosagem,
            fabricante: novoMedicamento.fabricante.nome
        }
    };

    static async atualizarMedicamento(id,medicamento){
        const medicamentoAtualizado = await MedicamentoRepository.update(id,medicamento);

        if(!medicamentoAtualizado){
            throw new AppError("Medicamento não encontrado", 404);
        }

        return {
            id: medicamentoAtualizado.id,
            nome: medicamentoAtualizado.nome_comercial,
            principio: medicamentoAtualizado.principio_ativo,
            registro: medicamentoAtualizado.registro_anvisa,
            dosagem: medicamentoAtualizado.dosagem,
            fabricante: medicamentoAtualizado.fabricante.nome
        }
    }

    static async deletarMedicamento(id){
        const medicamentoDeletado = await MedicamentoRepository.delete(id);

        if(!medicamentoDeletado){
            throw new AppError("Medicamento não encontrado", 404);
        }

        return medicamentoDeletado;
    }
}