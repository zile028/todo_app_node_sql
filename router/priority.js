const {Router} = require("express");
const router = Router();

// GET
router.get("/add", require("../controller/priority/renderAddPriority"));
router.get("/all", require("../controller/priority/renderAllPriority"));

//POST
router.post("/add", require("../controller/priority/addPriority.js"));




module.exports = router;