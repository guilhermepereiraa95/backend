const connection = require('../database/connection');

module.exports = {
  async show(request, response){
    const id = request.params.id;
    
    const produto = await connection('produtos')
    .where('id', id)
    .select('*');

    return response.json(produto);

  },
  async index(request, response) {

    const produtos = await connection('produtos') 
      .select([
        'produtos.*', 
        'produtos.title', 
        'produtos.description', 
        'produtos.type',
        'produtos.value'
      ]);

    const lanches = await connection('produtos').where("type", "lanche")
      .select([
        'produtos.*', 
        'produtos.title', 
        'produtos.description', 
        'produtos.type',
        'produtos.value'
      ]);

    const porcoes = await connection('produtos').where("type", "porcoes")
    .select([
      'produtos.*', 
      'produtos.title', 
      'produtos.description', 
      'produtos.type',
      'produtos.value'
    ]);

    const bebidas = await connection('produtos').where("type", "bebidas")
      .select([
        'produtos.*', 
        'produtos.title', 
        'produtos.description', 
        'produtos.type',
        'produtos.value'
      ]);

    const sobremesas = await connection('produtos').where("type", "sobremesas")
    .select([
      'produtos.*', 
      'produtos.title', 
      'produtos.description', 
      'produtos.type',
      'produtos.value'
    ]);

    return response.json({
      produtos,
      lanches, 
      porcoes, 
      bebidas, 
      sobremesas
    });
  },

  async create(request, response) {
    const { title, description, value, type } = request.body;
    
    const [id] = await connection('produtos').insert({
      title,
      description,
      value,
      type
    });

    return response.json({ id });
  },

  async update(request, response) {
    const {
      title,
      description,
      value,
      type
    } = request.body;

    const { id } = request.params;

    await connection('produtos').where('id', id)
    .update({
      title,
      description,
      value,
      type
    });

    return response.json({ 
      title,
      description,
      value,
      type
     });

  },

  async delete(request, response) {
    const { id } = request.params;

    const produtos = await connection('produtos')
      .where('id', id)
      .first();

    await connection('produtos').where('id', id).delete();

    return response.status(204).send();
  }
};