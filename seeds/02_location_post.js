
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('location_post').del()
    .then(function () {
      // Inserts seed entries
      return knex('location_post').insert([
        {id: 1, profile_id: 3,country_name: 'Nepal', goal_date: 'April 01 2020', activities: 'Anapurna Circuit, Kathmandu, Everest Base Camp', visited: false},
        {id: 2, profile_id: 3,country_name: 'Argentina', goal_date: 'April 01 2019', activities: 'Work for 6 months on an eco village winery', visited: false},
        {id: 3, profile_id: 3,country_name: 'Chile', goal_date: 'July 01 2019', activities: 'Patagonia treks', visited: false},
        {id: 4, profile_id: 3,country_name: 'Norway', goal_date: 'January 01 2021', activities: 'See the northern lights, Do a trek', visited: false},
        {id: 5, profile_id: 3,country_name: 'New Zealand', goal_date: 'September 01 2017', activities: 'Buy a van and drive around the country', visited: true},
        {id: 6, profile_id: 2,country_name: 'Chile', goal_date: 'April 13 2020', activities: 'Try Cocoa leaves, Ride my motorcycle in the Atacama', visited: false},
        {id: 7, profile_id: 2,country_name: 'Mongolia', goal_date: 'June 01 2021', activities: 'Ride a camel across the Steppes', visited: false},
        {id: 8, profile_id: 2,country_name: 'Vietnam', goal_date: 'July 15 2019', activities: 'Eat something weird, visit Hailong bay', visited: false},
        {id: 9, profile_id: 2,country_name: 'Japan', goal_date: 'December 01 2018', activities: 'Spend 48 hours exploring tokyo without sleeping, go skiing down mount Fuji', visited: false},
        {id: 10, profile_id: 2,country_name: 'Scotland', goal_date: 'June 15 2016', activities: 'Eat some Haggis, enjoy the pipes, visit the family', visited: true},
        {id: 11, profile_id: 1,country_name: 'Norway', goal_date: 'December 01 2021', activities: 'Visit Simon', visited: false},
        {id: 12, profile_id: 1,country_name: 'New Zealand', goal_date: 'April 01 2021', activities: 'Go backpacking', visited: false},
        {id: 13, profile_id: 1,country_name: 'Canada', goal_date: 'November 10 2018', activities: 'Move there forever', visited: false},
        {id: 14, profile_id: 1,country_name: 'Germany', goal_date: 'August 01 2022', activities: 'Drink beer', visited: false},
        {id: 15, profile_id: 4,country_name: 'United States', goal_date: 'June 30 2020', activities: 'Go to Yellowstone Nation Park', visited: false},
        {id: 16, profile_id: 4,country_name: 'Ireland', goal_date: 'January 01 2021', activities: 'Go visit our distant relatives', visited: false},
        {id: 17, profile_id: 4,country_name: 'New Zealand', goal_date: 'August 30 2022', activities: 'Visit the backcountry and see the amazing views', visited: false},
        {id: 18, profile_id: 4,country_name: 'Mexico', goal_date: 'December 28 2018', activities: 'Visit the temples of the sun and moon at Teotihuacan', visited: false},
        {id: 19, profile_id: 4,country_name: 'France', goal_date: 'December 29 2013', activities: 'Go visit the Eiffel Tower during New Years celebration', visited: true},

      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE location_post_id_seq RESTART WITH 20;');
    })
};
