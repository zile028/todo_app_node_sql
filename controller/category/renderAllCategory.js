const poolDB = require("../../utils/connection");
const renderAllCategory = async (req, res, next) => {
    try {
        let sql = "SELECT c.*, COUNT(t.categoryID) AS numberTask " +
            "FROM category AS c " +
            "LEFT JOIN task AS t ON t.categoryId = c.id " +
            "GROUP BY c.id " +
            "ORDER BY numberTask DESC";
        let category = await poolDB(sql);
        res.render("allCategory", {category});
    } catch (error) {
        console.log(error);
    }
};

module.exports = renderAllCategory;