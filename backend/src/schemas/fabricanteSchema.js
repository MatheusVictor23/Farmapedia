import Joi from "joi";

export const fabricanteSchema = Joi.object({
    nome: Joi.string().min(3).max(100).required().messages({
        "string.base": "Nome deve ser uma string.",
        "string.empty": "Nome não pode estar vazio.",
        "string.min": "Nome deve ter pelo menos 3 caracteres.",
        "string.max": "Nome pode ter no máximo 100 caracteres.",
        "any.required": "Nome é obrigatório."
      }),

      documento: Joi.string().length(5).required().messages({
        "string.base": "Documento deve ser uma string.",
        "string.length": "Documento deve ter 5 caracteres.",
        "any.required": "Documento é obrigatório."
      }),
    
      pais: Joi.string().optional().messages({
        "string.base": "País deve ser uma string."
      })
});