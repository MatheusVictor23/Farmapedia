import fabricanteRoutes from "./fabricanteRoutes.js";
import medicamentoRoutes from "./medicamentoRoutes.js";
import {Router} from "express";

const router = new Router();

router.use('/fabricantes', fabricanteRoutes);
router.use('/medicamentos', medicamentoRoutes);

export default router;