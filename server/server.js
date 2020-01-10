//This is the Router file
// const db = require('../database/index.js');
require('newrelic');
const controller = require('./controller');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.node_env || process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

app.listen(port, () => {

  console.log('Server is running on: ', port);
  // db.initialize();

});
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));


module.exports.app = app;
app.get('/api/carousel/:businessId/', (req, res) => {
  let id = req.params.businessId;
  console.log("get request with params", id);
  controller.getImage(id, res);
});
app.get('/', (req, res) => {
  res.send(200);
});
module.exports = app;
