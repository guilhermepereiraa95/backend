const crypto = require('crypto');
const connection = require('../database/connection');
const pusher = require('../services/Pusher')

module.exports = {
  async index(request, response) {
    try {
      
    } catch (err) {
      response.status(404).send('Erro na conexão');
    }

  },
  async create(request, response) {
    try {
      
    } catch (err) {
      response.status(404).send('Erro na conexão');
    }

  }
};