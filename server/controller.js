// const db = require('../database/index.js');
const model = require('./model');

module.exports = {

  getImage: (id, res) =>{

    model.getImage(id, (err, data) => {
      if (err) {
        res.status(400).send('error getting data from database');
      } else {
        res.status(200).send(data);
      }
    })

  }

};