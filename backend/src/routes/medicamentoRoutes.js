import { Router } from "express";
import MedicamentoController from "../controllers/medicamentoController.js";
import {validarRequisicao} from "../middlewares/validarRequisicao.js";
import {medicamentoSchema} from "../schemas/medicamentoSchema.js";

const router = Router();

router.get('/',MedicamentoController.listarMedicamento);
router.get('/:id', MedicamentoController.buscarMedicamento);
router.post('/', validarRequisicao(medicamentoSchema),MedicamentoController.cadastrarMedicamento);
router.put('/:id', validarRequisicao(medicamentoSchema),MedicamentoController.atualizarMedicamento);
router.delete('/:id', MedicamentoController.deletarMedicamento);

export default router;