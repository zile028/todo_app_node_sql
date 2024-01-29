const mysql = require("mysql2/promise")
const poolDB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_app',
    namedPlaceholders:true
})

module.exports = poolDB