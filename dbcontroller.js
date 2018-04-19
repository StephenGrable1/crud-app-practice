const client = require('./database');

var dbcontroller = {};

dbcontroller.initializeDatabase = (req, res, next) => {

    //For testing purposes 
    client.query('DROP TABLE IF EXISTS todo', (err, res) => {
        if (err){
            console.log('error dropping table')
        } else {
            console.log('Dropped tables successfully')
        };
    });

    const tableCreate = `CREATE TABLE IF NOT EXISTS todos (
        title VARCHAR(500),
        status VARCHAR(100)
    )`

    client.query(tableCreate, (err, res) => {
        if (err) {
            console.log('error trying to create table')
        } else {
            console.log('successfully created table!')
        }
    })
    next()
}

dbcontroller.addTodo = (req, res, next) => {
    const addTodo = `INSERT INTO todos VALUES (
        '${req.body['todo-text']}',
        'not finished'
    )`

    console.log('Trying to get text off req: ', req.body['todo-text']);

    client.query(addTodo, (err, res) => {
        if (err) {
            console.log('error trying to create table')
        } else {
            console.log('successfully created table!')
        }
    })

    res.status(200);
    res.send('This is the todo woo');
}

module.exports = dbcontroller;