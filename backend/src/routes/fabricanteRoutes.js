import {Router} from "express";
import FabricanteController from "../controllers/fabricanteController.js"
import { fabricanteSchema } from "../schemas/fabricanteSchema.js";
import { validarRequisicao } from "../middlewares/validarRequisicao.js";

const router = new Router();

router.get('/', FabricanteController.listarFabricantes);
router.get('/:id', FabricanteController.buscarFabricante);
router.post('/',FabricanteController.cadastrarFabricante);
router.put('/:id',FabricanteController.atualizarFabricante);
router.delete('/:id', FabricanteController.deletarFabricante);

export default router;