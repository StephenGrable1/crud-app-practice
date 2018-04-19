const { Pool, Client } = require('pg');

//in your terminal, you need to create the below database by 
//typing 'createdb database-name-here'

//to see your database structure and tables
//you must type 'psql database-name-here' 
//and inside that prompt you can type '\d' to see your tables

const client =  new Client ({
    user: 'Stephen',
    host: 'localhost',
    database: 'assessmentdb',
    password: 'password',
    port: 5432,
});

client.connect();

module.exports = client;