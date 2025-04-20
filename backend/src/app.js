import express from "express";
import sequelize from "./config/database.js";
import FabricanteRoutes from "./routes/FabricanteRoutes.js";
import MedicamentoRoutes from "./routes/MedicamentoRoutes.js"

const app = express();

app.use(express.json());

app.use("/api/fabricantes", FabricanteRoutes);
app.use("/api/medicamentos", MedicamentoRoutes);


sequelize
.sync()
.then(() => {console.log("Banco de dados sincronizado!")})
.catch((error) => {console.log("Erro ao sincronizar dados:" + error)});


