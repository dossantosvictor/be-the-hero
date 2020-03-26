
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (tabele) {
    tabele.string('id').primary();
    tabele.string('name').notNullable();
    tabele.string('email').notNullable();
    tabele.string('whatsapp').notNullable();
    tabele.string('city').notNullable();
    tabele.string('uf',2 ).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
