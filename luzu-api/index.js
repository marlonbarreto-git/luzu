const express = require("express");
const { Client } = require('pg')
const {conn} = require('./src/services/db/db.js')

const port = 3001
const server = express()

server.get('/', (req, res) => {
  res.send('test')
})

conn
  .sync()
  .then(() => {
    server.listen(port, () => {
      console.log(`%s listening at ${port}`); // eslint-disable-line no-console
    });
  })
  .catch((err) => {
    console.error(err);
  });