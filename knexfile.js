// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'sql10.freesqldatabase.com',
      port : 3306,
      user : 'sql10503565',
      password : 'EHsA4D4vye',
      database : 'sql10503565'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host : 'sql10.freesqldatabase.com',
      port : 3306,
      user : 'sql10503565',
      password : 'EHsA4D4vye',
      database : 'sql10503565'
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
      host : 'sql10.freesqldatabase.com',
      port : 3306,
      user : 'sql10503565',
      password : 'EHsA4D4vye',
      database : 'sql10503565'
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
