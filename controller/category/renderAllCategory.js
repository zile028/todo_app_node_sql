const poolDB = require("../../utils/connection");
const renderAllCategory = async (req, res, next) => {
    try {
        let sql = "SELECT * " +
            "FROM category AS c " +
            "LEFT JOIN task AS t ON t.categoryId = c.id " +
            "ORDER BY category";
        let [category] = await poolDB.execute(sql);
        res.render("allCategory", {category});
    } catch (error) {
        console.log(error);
    }
};

module.exports = renderAllCategory;