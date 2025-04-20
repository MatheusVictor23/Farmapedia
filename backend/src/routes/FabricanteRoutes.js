import {Router} from "express";

const router = new Router();

router.get('/', listarFabricantes);
router.get('/:id', buscarFabricante);
router.post('/', cadastrarFabricante);
router.put('/:id', atualizarFabricante);
router.delete('/:id', deletarFabricante);

export default router;