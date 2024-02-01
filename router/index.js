const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});
router.use("/category", require("./category"));
router.use("/priority", require("./priority"));
router.use("/task", require("./task"));

router.use("*", (req, res) => {
    res.render("404");
});
module.exports = router;