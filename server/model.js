const express = require ('express');
// const db = require('../database/index.js');
const { Pool } = require('pg');
let pool = new Pool({
    host: 'ec2-54-183-164-65.us-west-1.compute.amazonaws.com',
    user: 'power_user',
    database: 'carousel',
    password: '$poweruserpassword',
  });
module.exports = {
  getImage: (id, callback) => {
    (async () => {
      console.log('this is id :', id);
      const query = await pool.query(`SELECT image_url FROM images WHERE restaurant_id=${id};`)
      .then((data) => {
        console.log('this is data :', data)
        callback(null, data)
      })
      .catch((err) => {
        console.log(`error with query: ${err}`)
        callback(err, null)
      })
    })();
  }
};
