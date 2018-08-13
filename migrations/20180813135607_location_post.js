exports.up = function(knex, Promise) {
    return knex.schema.createTable("location_post", table => {
        table.increments("id");
        table.text("country_name");
        table.date("goal_date");
        table.text("activities");
        table.boolean("visited");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("location_post");
};