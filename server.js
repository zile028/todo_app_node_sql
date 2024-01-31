const express = require("express");
const {PORT} = require("./config/constant");
const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.set("view engine", "ejs");

server.use("/", require("./router"));

server.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.render("errorPage", {error: err.message});
    }
});

server.listen(PORT, () => {
    console.log("Server pokrenut.");
});