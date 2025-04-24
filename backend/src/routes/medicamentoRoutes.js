import { Router } from "express";
import MedicamentoController from "../controllers/medicamentoController.js";
import { validarRequisicao } from "../middlewares/validarRequisicao.js";
import { medicamentoSchema } from "../schemas/medicamentoSchema.js";
const router = new Router();

router.get('/', MedicamentoController.listarMedicamentos);
router.get('/:id', MedicamentoController.buscarMedicamento);
router.post('/', validarRequisicao(medicamentoSchema), MedicamentoController.cadastrarMedicamento);
router.put('/:id', validarRequisicao(medicamentoSchema),MedicamentoController.atualizarMedicamento);
router.delete('/:id', MedicamentoController.deletarMedicamento);

export default router;