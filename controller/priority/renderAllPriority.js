const poolDB = require("../../utils/connection");



const renderAllPriority = async (req,res, next) =>{
    let sql=`
        SELECT p.*, COUNT(t.priorityID) AS NumberOfTasks
        FROM priority AS p 
        JOIN task AS t ON t.priorityID=p.id
        GROUP BY p.id
        ORDER BY NumberOfTasks
    `;
    try {
    let priorites = await poolDB(sql);
    res.render("allPriority", {priorites})
} catch (error) {
    next(error)
} 

}


module.exports = renderAllPriority;