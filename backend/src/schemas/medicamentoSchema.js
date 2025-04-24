import Joi from "joi";

export const medicamentoSchema = Joi.object({
  nome: Joi.string().min(3).max(100).required().messages({
    "string.base": "Nome comercial deve ser uma string.",
    "string.empty": "Nome comercial não pode estar vazio.",
    "string.min": "Nome comercial deve ter pelo menos 3 caracteres.",
    "string.max": "Nome comercial pode ter no máximo 100 caracteres.",
    "any.required": "Nome comercial é obrigatório."
  }),

  principio: Joi.string().min(3).max(100).required().messages({
    "string.base": "Princípio ativo deve ser uma string.",
    "string.empty": "Princípio ativo não pode estar vazio.",
    "string.min": "Princípio ativo deve ter pelo menos 3 caracteres.",
    "string.max": "Princípio ativo pode ter no máximo 100 caracteres.",
    "any.required": "Princípio ativo é obrigatório."
  }),

  registro: Joi.string().length(13).required().messages({
    "string.base": "Registro ANVISA deve ser uma string.",
    "string.length": "Registro ANVISA deve ter exatamente 13 caracteres.",
    "any.required": "Registro ANVISA é obrigatório."
  }),

  dosagem: Joi.string().min(1).max(50).required().messages({
    "string.base": "Dosagem deve ser uma string.",
    "string.empty": "Dosagem não pode estar vazia.",
    "string.min": "Dosagem deve ter pelo menos 1 caractere.",
    "string.max": "Dosagem pode ter no máximo 50 caracteres.",
    "any.required": "Dosagem é obrigatória."
  }),

  fabricante: Joi.string().required().messages({
    "string.base": "Nome do fabricante deve ser uma string.",
    "string.empty": "Nome do fabricante não pode estar vazio.",
    "any.required": "Nome do fabricante é obrigatório."
  })
});