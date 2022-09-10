const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const routes = require("./src/routes");

const port = process.env.PORT || 3001
const server = express()

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use("/", routes);

server.listen(port, () => console.log('Server is running...'))
