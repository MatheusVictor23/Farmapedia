export const validarRequisicao = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
  
      if (error) {
        const mensagens = error.details.map((detail) => detail.message);
        return res.status(400).json({ erros: mensagens });
      }
  
      next(); // Se passou na validação, continua pro controller
    };
  };