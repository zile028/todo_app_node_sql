const express = require("express");
const {PORT} = require("./config/constant");
const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));
server.set("view engine", "ejs");
server.use("/", require("./router"));

server.listen(PORT, () => {
    console.log("Server pokrenut.");
});