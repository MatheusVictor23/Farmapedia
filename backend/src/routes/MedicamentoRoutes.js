import { Router } from "express";

import {
    listarMedicamentos,
    buscarMedicamento,
    cadastrarMedicamento,
    atualizarMedicamento,
    deletarMedicamento
} from "../repositories/Medicamento.js";


const router = new Router();

router.get('/', listarMedicamentos);
router.get('/:id', buscarMedicamento);
router.post('/', cadastrarMedicamento);
router.put('/:id', atualizarMedicamento);
router.delete('/:id', deletarMedicamento);

export default router;