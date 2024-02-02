const poolDB = require("../../utils/connection");
const {formatDate} = require("../../utils/formatDate");
const renderSingleTask = async (req, res, next) => {
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
                   WHERE t.id = :taskID
        `;
        let [task] = await poolDB(sql, {taskID});
        console.log(task);
        res.render("singleTask", {task, formatDate});
    } catch (error) {
        next(error);
    }
};

module.exports = renderSingleTask;