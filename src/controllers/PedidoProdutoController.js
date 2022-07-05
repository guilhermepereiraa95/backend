const connection = require('../database/connection');

module.exports = {
async show(request, response){
    const id = request.params.id;
    
    const pedido = await connection('produtos')
    .join('pedido_produto', 'pedido_produto.id_prod', 'produtos.id')
    .select('produtos.title', 'produtos.description', 'produtos.value', 'pedido_produto.qtd')    
    .where('pedido_produto.id_pedi', id);

    let total = 0;

    for await (let p of pedido) {
      total =+ p.value * p.qtd;
    }
    
    return response.json({pedido: pedido, total: total});
  }
}