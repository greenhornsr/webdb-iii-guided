
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles')
    .truncate()  // change from del() to truncate to reset the primary key back to 1 in addition to deleting the data
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'student'},
        {name: 'TA'},
        {name: 'PM'}
      ]);
    });
};

// add the seed data to database
  //npx knex seed:run

// RESEARCH ORM - OBJECT RELATIONAL MAPPER.  NO TIME AT LAMBDA