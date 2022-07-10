
exports.up = function(knex) {
    return knex.schema.createTable('frete', function (table) {
        table.integer('km').notNullable();
        table.integer('valor').notNullable();
          
      });
};

exports.down = function(knex) {
  
};
