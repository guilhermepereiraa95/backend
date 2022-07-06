const connection = require('../database/connection');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const tokenService = require('../services/TokenService');

module.exports = {
  
  async create(request, response) {
    const { login, name, password, email, type} = request.body;

    const session = await connection('session').insert(
      {
        login, 
        name,
        password,
        email, 
        type
      });  

    return response.json(
      session
    );
  },

  async login(request, response) {
    const { login, password } = request.body;
    
    const [session] = await connection('session')
    .where('login', login).andWhere('password', password).select('*');

    if(!session){
      return response.status(403).send('Usuário ou senha incorreta!');
    }

    tokenService.generate({
      id: session.id,
      login: session.login,
      name: session.name
    }).then((token) => {
      return response.json({token});
    }).catch((error) => {
      console.log(error)
    })

  },

  async update(request, response) {

    const { name, login, password } = request.body;
    
    const { id } = request.params;

    await connection('session').where('id', id)
    .update(
      {
        login, 
        password,
        name
      });

    return response.json(
      {
        login, 
        password,
        name
      }
    );
  },
  async delete(request, response) {
    
    const { id } = request.params;

    await connection('session').where('id', id)
    .delete();

    return response.json(
      "Deletado"
    );
  }
}