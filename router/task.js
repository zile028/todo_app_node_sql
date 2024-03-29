const {Router} = require("express");
const router = Router();
// GET
router.get("/", require("../controller/task/renderTasks"));
router.get("/add", require("../controller/task/renderAddTask"));
router.get("/:taskID", require("../controller/task/renderSingleTask"));
router.get("/:taskID/edit", require("../controller/task/renderEditTask"));
router.get("/:id/status/:status", require("../controller/task/changeStatus"));
// POST
router.post("/add", require("../controller/task/addTask"));
router.post("/update", require("../controller/task/updateTask"));

module.exports = router;