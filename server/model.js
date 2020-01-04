const express = require ('express');
// const db = require('../database/index.js');
const { Pool } = require('pg');
let pool = new Pool({
  database: 'carousel',
});
module.exports = {
  getImage: (id, callback) => {
    (async () => {
      console.log(id)
      const query = await pool.query(`SELECT image_url FROM images WHERE restaurant_id=${id};`)
      .then((data) => {
        console.log(data)
        callback(null, data)
      })
      .catch((err) => {
        console.log(`error with query: ${err}`)
        callback(err, null)
      })
    })();
  }
};
