import Fabricante from "../models/Fabricante.js";
import Medicamento from "../models/Medicamento.js";

export default class MedicamentoRepository {
  static async findAll() {
    try {
      return await Medicamento.findAll({
        include: {
          model: Fabricante,
          as: "fabricante",
        },
      });
    } catch (error) {
      throw new Error("Erro ao buscar todos os medicamentos: " + error.message);
    }
  }

  static async findById(id) {
    try {
      return await Medicamento.findByPk(id, {
        include: {
          model: Fabricante,
          as: "fabricante",
        },
      });
    }catch (error) {
      throw new Error("Erro ao buscar medicamento pelo ID: " + error.message);
    }
  }

  static async create(medicamento) {

    const registroDuplicado = await Medicamento.findOne({
      where: { registro_anvisa: medicamento.registro }
    });
  
    if (registroDuplicado) {
      throw new Error("Já existe um medicamento cadastrado com este número de registro ANVISA.");
    }

    const fabricanteEncontrado = await Fabricante.findOne({
      where: { nome: medicamento.fabricante },
    });

    if (!fabricanteEncontrado) {
      throw new Error("Fabricante não encontrado!");
    }

    const novoMedicamento = await Medicamento.create({
      nome_comercial: medicamento.nome,
      principio_ativo: medicamento.principio,
      registro_anvisa: medicamento.registro,
      dosagem: medicamento.dosagem,
      fabricante_id: fabricanteEncontrado.id,
    });

    return await Medicamento.findByPk(novoMedicamento.id,{
      include:{
        model:Fabricante,
        as:"fabricante"
      }
    });

  }

  static async update(id, medicamento) {

    const medicamentoEncontrado = await Medicamento.findByPk(id);

    if (!medicamentoEncontrado) {
      throw new Error("Medicamento não encontrado!");
    }

    const fabricanteEncontrado = await Fabricante.findOne({
      where: { nome: medicamento.fabricante },
    });

    if (!fabricanteEncontrado) {
      throw new Error("Fabricante não encontrado!");
    }

    medicamentoEncontrado.set({
      nome_comercial: medicamento.nome,
      principio_ativo: medicamento.principio,
      registro_anvisa: medicamento.registro,
      dosagem: medicamento.dosagem,
      fabricante_id: fabricanteEncontrado.id,
    });

    await medicamentoEncontrado.save();

    return await Medicamento.findByPk(medicamentoEncontrado.id,{
      include:{
        model:Fabricante,
        as:"fabricante"
      }
    });

  }

  static async delete(id) {
    const medicamentoEncontrado = await Medicamento.findByPk(id);

    if (!medicamentoEncontrado) {
      throw new Error("Medicamento não encontrado!");
    }

    await medicamentoEncontrado.destroy();
    return { message: "Medicamento deletado com sucesso!" };
    
  }
}
