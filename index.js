const express = require('express');
const createServer = require('./dist/index').default;

const app = express();
let nest;

app.use(async (req, res) => {
  if (!nest) {
    nest = express();
    await createServer(nest);
  }
  return nest(req, res);
});

module.exports = app;
