const { Pool } = require('pg');

let pool = new Pool({
  host: 'localhost',
  user: 'young',
  database: 'mydb',
  password: null,
});
pool.query(`DROP DATABASE IF EXISTS carousel;`)
  .then(() => {
    return pool.query(`CREATE DATABASE carousel;`)
  })
  .catch((err) => {
    console.log(`Error creating database: ${err}`);
  })
  .then(() => {
    pool.end();
    pool = new Pool({
      host: 'localhost',
      user: 'young',
      database: 'carousel',
      password: null,
    });
  })
  .then(() => {
    return pool.query(`DROP TABLE IF EXISTS restaurants;`)
  })
  .then(() => {
    return pool.query(`DROP TABLE IF EXISTS images;`)
  })
  .then(() => {
    return pool.query(`DROP TABLE IF EXISTS users;`)
  })
  .then(() => {
    return pool.query(`DROP TABLE IF EXISTS cuisines;`)
  })
  .catch((err) => {
    console.log(`Error dropping tables: ${err}`)
  })
  .then(() => {
    return pool.query(`CREATE TABLE cuisines (
      id SERIAL PRIMARY KEY,
      cuisine TEXT
    );`)
  })
  .then(() => {
    return pool.query(`CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      user_name VARCHAR (50),
      first_name VARCHAR (50),
      last_name VARCHAR (50),
      stars SMALLINT,
      reviews SMALLINT,
      avatar_url TEXT,
      elite_status BOOLEAN
    );`)
  })
  .then(() => {
    return pool.query(`CREATE TABLE restaurants (
      id SERIAL PRIMARY KEY,
      name TEXT,
      cuisine_id INTEGER,
      FOREIGN KEY (cuisine_id) REFERENCES cuisines(id),
      image_count SMALLINT
    );`)
  })
  .then(() => {
    return pool.query(`CREATE TABLE images (
      id SERIAL PRIMARY KEY,
      image_url TEXT,
      helpful SMALLINT,
      not_helpful SMALLINT,
      created_at DATE NOT NULL DEFAULT CURRENT_DATE,
      cuisine_id INTEGER,
      FOREIGN KEY (cuisine_id) REFERENCES cuisines(id),
      user_id INTEGER,
      FOREIGN KEY (user_id) REFERENCES users(id),
      caption TEXT,
      restaurant_id INTEGER,
      FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
    );`)
  })
  .then(() => {
    console.log(`finished initializing database`);
  })
  .catch((err) => {
    console.log(`Error creating tables: ${err}`)
  })

  module.exports= {
    pool: pool
  }