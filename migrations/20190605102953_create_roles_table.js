// new changes to the database schema
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', function(tbl){
        //primary key called id, autoincrements, integer
        tbl.increments();

        //a varchar column called name, 128 characters, unique, not null
        tbl.string('name', 128).notNullable().unique();
    })
};

// how to undo changes to the schema
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles');
};


//CLI COMMANDS
    // create this file without any specific commands
        // npx knex migrate:make tablename


    // creates above table
        // npx knex migrate: latest  

    // rollback changes to table
        // npx knex migrate: rollback

    // creates a seedfolder with a seedfile named 001-roles for sample data
    // important to give it a number when creating seedfiles as they do NOT get a timestamp with creation like tables do.
        // npx knex seed:make 001-roles

    // add the seed data to database
        //npx knex seed:run