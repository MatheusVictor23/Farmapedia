import { Router } from "express";


const router = new Router();

router.get('/', listarMedicamentos);
router.get('/:id', buscarMedicamento);
router.post('/', cadastrarMedicamento);
router.put('/:id', atualizarMedicamento);
router.delete('/:id', deletarMedicamento);

export default router;