exports.up = function(knex) {
    return knex.schema.createTable('pedido', function (table) {
      table.increments('id');
      table.string('nome').notNullable();
      table.string('localizacao').notNullable();
      table.string('pagamento').notNullable();
      table.string('status').notNullable();
      table.string('observacao');
      table.string('cor');
      table.string('data').notNullable();
      table.string('hora').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('pedido');
  };
  