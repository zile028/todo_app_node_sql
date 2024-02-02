const poolDB = require("../../utils/connection");
const addPriority = async (req, res, next) => {
    let reqBody = req.body;
    let sql = `
        INSERT INTO priority(priority, color)
        VALUES (:priority, :color)
    `;
    try {
        let result = await poolDB(sql, reqBody);
        res.redirect("/priority/add");
    } catch (error) {
        next(error);
    }

};


module.exports = addPriority;