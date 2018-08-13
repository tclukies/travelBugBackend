exports.up = function(knex, Promise) {
    return knex.schema.createTable("country", table => {
        table.increments("id");
        table.text("country_name");
        table.float("latitude");
        table.float("longitude");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("country");
};