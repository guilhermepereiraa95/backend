// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'mysql.smokemeat.kinghost.net',
      port : 3306,
      user : 'smokemeat',
      password : 'gui0246',
      database : 'smokemeat'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host : 'mysql.smokemeat.kinghost.net',
      port : 3306,
      user : 'smokemeat',
      password : 'gui0246',
      database : 'smokemeat'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : 'mysql.smokemeat.kinghost.net',
      port : 3306,
      user : 'smokemeat',
      password : 'gui0246',
      database : 'smokemeat'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
