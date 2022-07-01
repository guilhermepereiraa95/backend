
exports.up = function(knex) {
    return knex.schema.createTable('session', function (table) {
        table.increments('id').unique();
        table.string('login').notNullable();
        table.string('name').notNullable();        
        table.string('password').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('session');
};
