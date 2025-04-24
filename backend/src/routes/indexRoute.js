import fabricanteRoutes from "./fabricanteRoutes.js";
import {Router} from "express";

const router = new Router();

router.use('/fabricantes', fabricanteRoutes);

export default router;