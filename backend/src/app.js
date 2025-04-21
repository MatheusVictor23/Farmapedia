import express from "express";
import sequelize from "./config/database.js";
import routes from "./routes/indexRoute.js";
import errorHandler from "./middlewares/erroHandler.js";

const app = express();

app.use(express.json());

app.use("/api/", routes);
app.use(errorHandler);

sequelize
.sync()
.then(() => {console.log("Banco de dados sincronizado!")})
.catch((error) => {console.log("Erro ao sincronizar dados:" + error)});

export default app;
