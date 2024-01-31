const poolDB = require("../../utils/connection");
const {formatDate} = require("../../utils/formatDate");

const renderTasks = async (req, res, next) => {
    let sql = `
        SELECT t.*, c.category, c.color AS categoryColor, p.priority, p.color AS priorityColor
        FROM task AS t
                 JOIN priority AS p ON p.id = t.priorityID
                 JOIN category AS c ON c.id = t.categoryID
        ORDER BY t.isDone, t.deadline
    `;
    try {
        let tasks = await poolDB(sql);
        res.render("allTasks", {tasks, formatDate});
    } catch (error) {
        next(error);
    }
};

module.exports = renderTasks;