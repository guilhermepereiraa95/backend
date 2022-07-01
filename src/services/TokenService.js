
const jwt = require('jsonwebtoken');
const SECRET = 'guilherme';
module.exports = {
  
  async generate(payload) {

    var token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

    return token;
  },

  async check(token){
      var check = jwt.verify(token, SECRET)

      return check;
  }
}