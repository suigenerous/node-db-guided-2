
// describes the changes to apply when migrtation runs
exports.up = function(knex) {
    return knex.schema.createTable('menu_items', tbl => {
        tbl.increments(); // auto generates primary key called id, integer, auto-incremented

        tbl.string('name', 512).notNullable().unique().index();

        tbl.decimal('price', 8, 2);

        tbl.boolean('available').defaultTo(false);
    })
};

// describes how to undo changes 
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu_items');
};
