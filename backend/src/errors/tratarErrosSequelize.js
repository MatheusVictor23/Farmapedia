import { Sequelize } from "sequelize";
import AppError from "./appError.js";

export default function tratarErroSequelize(err) {
  if (err instanceof Sequelize.UniqueConstraintError) {
    throw new AppError("Já existe um registro com esse valor único.", 409);
  }

  if (err instanceof Sequelize.ValidationError) {
    const mensagens = err.errors.map(e => e.message).join("; ");
    throw new AppError(`Erro de validação: ${mensagens}`, 400);
  }

  if (err instanceof Sequelize.ForeignKeyConstraintError) {
    throw new AppError("Há elementos associados a esse modelo.", 400);
  }

  throw err; 
}