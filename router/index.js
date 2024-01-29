const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});
router.use("/category", require("./category"));

module.exports = router;