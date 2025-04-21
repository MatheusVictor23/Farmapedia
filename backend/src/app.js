import express from "express";
import sequelize from "./config/database.js";
import routes from "./routes/indexRoute.js";

const app = express();

app.use(express.json());

app.use("/api/", routes);

sequelize
.sync()
.then(() => {console.log("Banco de dados sincronizado!")})
.catch((error) => {console.log("Erro ao sincronizar dados:" + error)});

export default app;
