const poolDB = require("../../utils/connection");

const addCategory = async (req, res, next) => {
    let reqBody = req.body;
    try {
        let sql = "INSERT INTO category (category, color) VALUES (:category, :color)";
        let result = await poolDB(sql, reqBody);
        res.redirect("/category/add");
    } catch (error) {
        console.log(error);
    }
};

module.exports = addCategory;