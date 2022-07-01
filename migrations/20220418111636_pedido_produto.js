exports.up = function(knex) {
    return knex.schema.createTable('pedido_produto', function (table) {
      table.increments('id');
      table.integer('id_prod').unsigned();      
      table.integer('id_pedi').unsigned();
      table.integer('qtd').notNullable();

      table.foreign('id_prod').references('id').inTable('produtos');
      table.foreign('id_pedi').references('id').inTable('pedido');


    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('pedido_produto');
  };
  