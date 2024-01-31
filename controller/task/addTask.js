const poolDB = require("../../utils/connection");
const addTask = async (req, res, next) => {
    let newTask = req.body;
    let sql = `
        INSERT INTO task (title, description, deadline, categoryID, priorityID)
        VALUES (:title, :description, :deadline, :categoryID, :priorityID)
    `;
    try {
        let result = await poolDB(sql, newTask);
        res.redirect("/task");
    } catch (error) {
        next(error);
    }
};

module.exports = addTask;