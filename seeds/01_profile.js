
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("profile").del()
    .then(function () {
      // Inserts seed entries
      return knex("profile").insert([
        {id: 1,first_name: "Natalie", last_name: "Todd", email: "natalie.todd15@gmail.com", username: "natalie.todd", password: "Peanuts80"},
        {id: 2,first_name: "R.J.", last_name: "Kirkhope", email: "rjkirkhope@gmail.com", username: "cat.mom666", password: "Beadhead13"},
        {id: 3,first_name: "Tom", last_name: "Clukies", email: "thomas.clukies@gmail.com", username: "tclukies", password: "rjscat123"},
        {id: 4,first_name: "Ryan", last_name: "McCrory", email: "ryanmccrory83@gmail.com", username: "ryanmccrory83", password: "Sparkyisaturdnugget"}
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE profile_id_seq RESTART WITH 5;');
    })
};

