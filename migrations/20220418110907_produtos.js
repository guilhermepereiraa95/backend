exports.up = function(knex) {
    return knex.schema.createTable('produtos', function (table) {
      table.increments('id');
  
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('type').notNullable();
      table.decimal('value').notNullable();  
      table.integer('discount');  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
  };
  