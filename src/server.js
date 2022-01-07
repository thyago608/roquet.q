const express = require("express");
const route = require("./route");
const path = require("path");

const server = express();

server.set("view engine", "ejs");
server.set("views", path.resolve(__dirname, "views"));

server.use(express.static("public"));
server.use(route);

server.listen(3000, () => console.log("Server is running"));
