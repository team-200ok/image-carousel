const { Pool } = require('pg');

let pool = new Pool({
  host: 'ec2-52-53-152-loc.us-west-1.compute.amazonaws.com',
  user: 'postgres',
  database: 'postgres',
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
      host: 'ec2-52-53-152-54.us-west-1.compute.amazonaws.com',
      user: 'postgres',
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
      user_id INTEGER,
      caption TEXT,
      restaurant_id INTEGER
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