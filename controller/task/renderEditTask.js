const poolDB = require("../../utils/connection");
const {formatDate, formatInputDate} = require("../../utils/formatDate");
const renderEditTask = async (req, res, next) => {
    try {
        let {taskID} = req.params;
        let sql = `SELECT t.*,
                          c.category,
                          c.color AS categoryColor,
                          p.priority,
                          p.color AS priorityColor
                   FROM task AS t
                            JOIN category AS c ON c.id = t.categoryID
                            JOIN priority AS p ON p.id = t.priorityID
                   WHERE t.id = :taskID;

        SELECT *
        FROM category;

        SELECT *
        FROM priority;
        `;

        let [[task], category, priority] = await poolDB(sql, {taskID});
        console.log({task, category, priority});
        res.render("editTask", {task, category, priority, formatInputDate});
    } catch (error) {
        next(error);
    }

};

module.exports = renderEditTask;