const {Router} = require("express");
const router = Router();
// GET
router.get("/", require("../controller/task/renderTasks"));
router.get("/add", require("../controller/task/renderAddTask"));
router.get("/:id/status/:status", require("../controller/task/changeStatus"));
// POST
router.post("/add", require("../controller/task/addTask"));

module.exports = router;