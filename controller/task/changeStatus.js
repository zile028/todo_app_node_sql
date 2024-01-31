const poolDB = require("../../utils/connection");
const changeStatus = async (req, res, next) => {
    let {id, status} = req.params;
    let sql = `
        UPDATE task
        SET isDone = :status
        WHERE id = :id
    `;
    try {
        let result = await poolDB(sql, req.params);
        res.redirect("/task");
    } catch (error) {
        next(error);
    }
};

module.exports = changeStatus;