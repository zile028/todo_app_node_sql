const poolDB = require("./utils/connection");
const categorySQL = "CREATE TABLE category " +
    "(id INT(11) NOT NULL AUTO_INCREMENT, " +
    "category VARCHAR(20) NOT NULL, " +
    "color VARCHAR(10) NOT NULL," +
    "PRIMARY KEY (id)); ";

const prioritySQL = "CREATE TABLE priority " +
    "(id INT(11) NOT NULL AUTO_INCREMENT, " +
    "priority VARCHAR(20) NOT NULL, " +
    "color VARCHAR(10) NOT NULL," +
    "PRIMARY KEY (id)); ";

const taskSQL = "CREATE TABLE task " +
    "(id INT(11) NOT NULL AUTO_INCREMENT, " +
    "title VARCHAR(20) NOT NULL, " +
    "description TEXT NOT NULL, " +
    "deadline DATE NOT NULL," +
    "categoryID INT(11) NOT NULL," +
    "priorityID INT(11) NOT NULL," +
    "isDone BOOLEAN NOT NULL DEFAULT 0," +
    "createdAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP," +
    "PRIMARY KEY (id));";

(function () {
    let tables = [categorySQL, prioritySQL, taskSQL];
    try {
        tables.forEach(async (sql) => {
            await poolDB(sql);
        });
        console.log("Tabele su kreirane");
    } catch (error) {
        console.log(error);
    }
})();


