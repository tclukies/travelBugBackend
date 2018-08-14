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
        return database("location_post");
    },
    readPosts(id) {
        return database("location_post")
            .select()
            .where("id", id)
            .first();
    },
    createPosts(location_post) {
        return database("location_post")
            .insert(location_post)
            .returning("*")
            .then(record => record[0]);
    },
    updatePosts(id, location_post) {
        return database("location_post")
            .update(location_post)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    deletePosts(id) {
        return database("location_post")
            .delete()
            .where("id", id);
    }
};
