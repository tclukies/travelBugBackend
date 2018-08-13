
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('location_post').del()
    .then(function () {
      // Inserts seed entries
      return knex('location_post').insert([
        {country_name: 'Nepal', goal_date: 'April 01 2020', activities: 'Anapurna Circuit, Kathmandu, Everest Base Camp', visited: false},
        {country_name: 'Argentina', goal_date: 'April 01 2019', activities: 'Work for 6 months on an eco village winery', visited: false},
        {country_name: 'Chile', goal_date: 'July 01 2019', activities: 'Patagonia treks', visited: false},
        {country_name: 'Norway', goal_date: 'January 01 2021', activities: 'See the northern lights, Do a trek', visited: false},
        {country_name: 'New Zealand', goal_date: 'September 01 2017', activities: 'Buy a van and drive around the country', visited: true},
        {country_name: 'Chile', goal_date: 'April 13 2020', activities: 'Try Cocoa leaves, Ride my motorcycle in the Atacama', visited: false},
        {country_name: 'Mongolia', goal_date: 'June 01 2021', activities: 'Ride a camel across the Steppes', visited: false},
        {country_name: 'Vietnam', goal_date: 'July 15 2019', activities: 'Eat something weird, visit Hailong bay', visited: false},
        {country_name: 'Japan', goal_date: 'December 01 2018', activities: 'Spend 48 hours exploring tokyo without sleeping, go skiing down mount Fuji', visited: false},
        {country_name: 'Scotland', goal_date: 'June 15 2016', activities: 'Eat some Haggis, enjoy the pipes, visit the family', visited: true},
        {country_name: 'Norway', goal_date: 'December 01 2021', activities: 'Visit Simon', visited: false},
        {country_name: 'New Zealand', goal_date: 'April 01 2021', activities: 'Go backpacking', visited: false},
        {country_name: 'Canada', goal_date: 'November 10 2018', activities: 'Move there forever', visited: false},
        {country_name: 'Germany', goal_date: 'August 01 2022', activities: 'Drink beer', visited: false},
        {country_name: 'United States', goal_date: 'June 30 2020', activities: 'Go to Yellowstone Nation Park', visited: false},
        {country_name: 'Ireland', goal_date: 'January 01 2021', activities: 'Go visit our distant relatives', visited: false},
        {country_name: 'New Zealand', goal_date: 'August 30 2022', activities: 'Visit the backcountry and see the amazing views', visited: false},
        {country_name: 'Mexico', goal_date: 'December 28 2018', activities: 'Visit the temples of the sun and moon at Teotihuacan', visited: false},
        {country_name: 'France', goal_date: 'December 29 2013', activities: 'Go visit the Eiffel Tower during New Years celebration', visited: true},

      ]);
    });
};
