exports.up = function(knex, Promise) {
    return knex.schema.createTable("location_post", table => {
        table.increments("id")
        table.integer("profile_id");
        table.foreign("profile_id").references('id').inTable('profile');
        table.text("country_name");
        table.date("goal_date");
        table.text("activities");
        table.boolean("visited");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("location_post");
};