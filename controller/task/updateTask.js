const poolDB = require("../../utils/connection");
const updateTask = async (req, res, next) => {
    let updateData = req.body;
    try {
        let sql = `
            UPDATE task
            SET title=:title,
                description=:description,
                deadline=:deadline,
                categoryID=:categoryID,
                priorityID=:priorityID
            WHERE id = :taskID
        `;
        let result = await poolDB(sql, updateData);
        res.redirect("/task#" + updateData.taskID);
    } catch (error) {
        next(error);
    }
};

module.exports = updateTask;