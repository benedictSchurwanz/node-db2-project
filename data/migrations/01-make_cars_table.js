exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments('cars_id') // is the one with `increments` automatically the primary key? or the first one with increments?
    
    table.text('vin', 17) // vin numbers are 17 characters
      .notNullable().unique()
    table.string('make', 255).notNullable()
    table.string('model', 255).notNullable()
    table.integer('mileage', 6).notNullable()
    table.string('title', 255)
    table.string('transmission', 255)
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
