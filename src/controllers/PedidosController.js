const crypto = require('crypto');
const connection = require('../database/connection');
const ProdutosController = require('./ProdutosController');
const pusher = require('../services/Pusher');

module.exports = {
  async index(request, response) {
    try {
      const pedidos = await connection('pedido')
        .select('*').orderBy('id', 'desc');

      let total = 0;

      for await (let p of pedidos) {
        total = total + p.value;

      }

      return response.json(pedidos);
    } catch (err) {
      response.status(404).send('Erro na conexão');
    }
  },

  async show(request, response) {
    try {
      const id = request.params.id;

      const [pedido] = await connection('pedido')
        .where('id', id)
        .select('*');

      return response.json(pedido);
    } catch (err) {
      response.status(404).send('Erro na conexão');
    }
  },

  async create(request, response) {
    try {
      const { 
        nome, 
        localizacao, 
        pagamento, 
        observacao, 
        pedido, 
        status = 'Pedido aguardando confirmação', 
        cor = "#a00" } = request.body;
        
      const [id_pedi] = await connection('pedido').insert({
        nome,
        localizacao,
        pagamento,
        observacao,
        status,
        cor
      });

      pusher.trigger("smokemeat-chanel", "criacao-pedido", {
        id_pedi,
        nome,
        localizacao,
        pagamento,
        observacao,
        status,
        cor
      });

      let id_prod;
      let qtd;

      for await (let p of pedido) {
        id_prod = p.id;
        qtd = p.qtd;

        await connection('pedido_produto').insert({
          id_prod,
          id_pedi,
          qtd
        })
      }

      return response.json({ id: id_pedi });
    } catch (err) {
      response.status(404).send('Erro na conexão');
    }
  },

  async update(request, response) {
    try {
      const { pedido } = request.body;
      const { id } = request.params;

      await connection('pedido').where('id', id)
        .update(pedido);

        pusher.trigger("smokemeat-chanel", "confirmacao-pedido", pedido);

      return response.json({pedido});
    } catch (err) {
      response.status(404).send('Erro na conexão');
    }

  }
};