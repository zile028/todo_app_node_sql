const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_app',
    namedPlaceholders: true,
    multipleStatements: true
});

const poolDB = async (sql, params) => {
    try {
        let [result] = await pool.query(sql, params);
        return result;
    } catch (error) {
        return new Error(error.message);
    }
};

module.exports = poolDB;