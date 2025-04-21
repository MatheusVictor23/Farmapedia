import { Router } from "express";

import MedicamentoController from "../controllers/medicamentoController.js";

const router = new Router();

router.get('/', MedicamentoController.listarMedicamentos);
router.get('/:id', MedicamentoController.buscarMedicamento);
router.post('/', MedicamentoController.cadastrarMedicamento);
router.put('/:id', MedicamentoController.atualizarMedicamento);
router.delete('/:id', MedicamentoController.deletarMedicamento);

export default router;