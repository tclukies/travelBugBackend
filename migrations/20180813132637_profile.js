exports.up = function(knex, Promise) {
    return knex.schema.createTable("profile", table => {
        table.increments("id");
        table.text("first_name");
        table.text("last_name");
        table.text("email");
        table.text("username");
        table.text("password");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("profile");
};