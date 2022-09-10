const express = require("express");

const port = 3001
const server = express()

server.listen(port, () => console.log('Server is running...'))
