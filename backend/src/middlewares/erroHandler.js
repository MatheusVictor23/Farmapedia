export default function errorHandler(err, req, res, next) {
    console.error("Erro detectado:", err.message);
  
    const status = err.status || 500;
    const mensagem = err.message || "Erro interno do servidor";
  
    return res.status(status).json({
      sucesso: false,
      mensagem,
    });
}