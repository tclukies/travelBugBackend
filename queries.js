const database = require("./database-connection");

module.exports = {
    list(){
        return database('profile')
    },
    read(id){
        return database('profile').select().where('id',id).first();
    },
    create(profile){
        return database('profile').insert(profile).returning('*').then(record => record[0]);
    },
    update(id, profile){
        return database('profile').update(profile).where('id',id).returning('*').then(record => record[0])
    },
    delete(id){
        return database('profile').delete().where('id',id);
    },
    list(){
        return database('location_post')
    },
    read(id){
        return database('location_post').select().where('id',id).first();
    },
    create(location_post){
        return database('location_post').insert(location_post).returning('*').then(record => record[0]);
    },
    update(id, location_post){
        return database('location_post').update(location_post).where('id',id).returning('*').then(record => record[0])
    },
    delete(id){
        return database('location_post').delete().where('id',id);
    }
};



