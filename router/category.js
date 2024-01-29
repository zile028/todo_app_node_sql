const {Router} = require("express");
const router = Router();

// GET
router.get("/add", require("../controller/category/renderAddCategory"));
router.get("/all", require("../controller/category/renderAllCategory"));

// POST
router.post("/add", require("../controller/category/addCategory"));

module.exports = router;