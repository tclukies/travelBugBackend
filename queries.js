const database = require("./database-connection");

module.exports = {
    //profile queries!

    listProfs() {
        return database("profile");
    },
    readProfs(id) {
        return database("profile")
            .select()
            .where("id", id)
            .first();
    },
    createProfs(profile) {
        return database("profile")
            .insert(profile)
            .returning("*")
            .then(record => record[0]);
    },
    updateProfs(id, profile) {
        return database("profile")
            .update(profile)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    deleteProfs(id) {
        return database("profile")
            .delete()
            .where("id", id);
    },

    //location_post queries!!

    listPosts() {
        return database("location_post")
            .join(
                "country",
                "location_post.country_name",
                "=",
                "country.country_name"
            )
            .select({
                location_post_id: "location_post.id",
                country_id: "country.id",
                profile_id: "location_post.profile_id",
                country_name: "location_post.country_name",
                goal_date: "location_post.goal_date",
                activities: "location_post.activities",
                visited: "location_post.visited",
                latitude: "country.latitude",
                longitude: "country.longitude"
            });
    },
    readPosts(id) {
        return database("location_post")
            .join(
                "country",
                "location_post.country_name",
                "=",
                "country.country_name"
            )
            .select({
                location_post_id: "location_post.id",
                country_id: "country.id",
                profile_id: "location_post.profile_id",
                country_name: "location_post.country_name",
                goal_date: "location_post.goal_date",
                activities: "location_post.activities",
                visited: "location_post.visited",
                latitude: "country.latitude",
                longitude: "country.longitude"
            })
            .where("location_post.id", id)
            .first();
    },
    createPosts(location_post) {
        return database("location_post")
            .join(
                "country",
                "location_post.country_name",
                "=",
                "country.country_name"
            )
            .insert(location_post)
            .returning({
                profile_id: "location_post.profile_id",
                country_name: "location_post.country_name",
                goal_date: "location_post.goal_date",
                activities: "location_post.activities",
                visited: "location_post.visited"
            })
            .then(record => record[0]);
    },
    updatePosts(id, location_post) {
        return database("location_post")
            .join(
                "country",
                "location_post.country_name",
                "=",
                "country.country_name"
            )
            .update(location_post)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    deletePosts(id) {
        return database("location_post")
            .join(
                "country",
                "location_post.country_name",
                "=",
                "country.country_name"
            )
            .delete()
            .where("id", id);
    },

    readPostsByProfile_id(id) {
        return database("location_post")
            .join(
                "country",
                "location_post.country_name",
                "=",
                "country.country_name"
            )
            .select({
                location_post_id: "location_post.id",
                country_id: "country.id",
                profile_id: "location_post.profile_id",
                country_name: "location_post.country_name",
                goal_date: "location_post.goal_date",
                activities: "location_post.activities",
                visited: "location_post.visited",
                latitude: "country.latitude",
                longitude: "country.longitude"
            })
            .where("profile_id", id);
    }
};
