import {Router} from "express";
import {
    listarFabricantes,
    buscarFabricante,
    cadastrarFabricante,
    atualizarFabricante,
    deletarFabricante

} from "../repositories/Fabricante.js"

const router = new Router();

router.get('/', listarFabricantes);
router.get('/:id', buscarFabricante);
router.post('/', cadastrarFabricante);
router.put('/:id', atualizarFabricante);
router.delete('/:id', deletarFabricante);

export default router;