const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');

// let restaurants = '';
// let images = '';
// let users = '';
// let cuisines = '';
// let restaurantCount = 100;

// for (let i = 0; i < restaurantCount; i++) {
//   const name = faker.company.companyName();
//   const cuisine_id = Math.floor(Math.random() * 100);
//   const image_count = Math.floor(Math.random() * (15 - 10) + 10);
//   restaurants = restaurants.concat(`${name},${cuisine_id},${image_count}\n`);
// }

let pool = new Pool({
  database: 'carousel',
});

(async () => {
  let begin = new Date().getTime();
  let csvPath = '/Users/young/photo-carousel-service/database/PostgreSQL/'
  console.log(`starting async queries`);

  //seed 100 cuisines
  let cuisinesBegin = new Date().getTime();
  console.log(`seeding cuisines table`);
  const cuisine = await pool.query(`COPY cuisines(cuisine) FROM '${csvPath}cuisines.csv' CSV;`);
  let cuisinesFinish = new Date().getTime() - cuisinesBegin;
  console.log(`finished seeding 100 cuisines in ${cuisinesFinish} ms`);

  //seed 1M users
  let usersBegin = new Date().getTime();
  console.log(`seeding users table`);
  const user = await pool.query(`COPY users(user_name,first_name,last_name,stars,reviews,avatar_url,elite_status) FROM '${csvPath}users.csv' CSV;`);
  let usersFinish = new Date().getTime() - usersBegin;
  console.log(`finished seeding 1M users in ${usersFinish} ms`);

  //seed 10M resteraunts
  let restaurantsBegin = new Date().getTime();
  console.log(`seeding restaurants table`);
  const restaurant = await pool.query(`COPY restaurants(name,cuisine_id,image_count) FROM '${csvPath}restaurants.csv' CSV;`);
  let restaurantFinish = new Date().getTime() - restaurantsBegin;
  console.log(`finished seeding 10M restaurants in ${restaurantFinish} ms`);

  //seed 150M images
  let imagesBegin = new Date().getTime();
  console.log(`seeding images table`);
  const image = await pool.query(`COPY images(image_url,helpful,not_helpful,created_at,cuisine_id,user_id,caption,restaurant_id) FROM '${csvPath}images.csv' CSV;`);
  let imagesFinish = new Date().getTime() - imagesBegin;
  console.log(`finished seeding 100M images in ${imagesFinish} ms`);

  let finish = new Date().getTime() - begin;
  console.log(`finished seeding in ${finish} ms`);
  await pool.end();
  console.log(`ended pool`);
})();

// fs.writeFile(path.join(__dirname, 'restaurants.csv'), restaurants, (err) => {
//   if (err) {
//     console.log(`error creating restaurant csv: ${err}`);
//   } else {
//     console.log('created restaurant csv');
//   }
// })
// .then(() => {
//   pool.connect();
//   const restaurantPath = path.join(__dirname, 'restaurants.csv');
//   pool.query(`COPY restaurants(name, cuisine_id, image_count) FROM ${restaurantPath} WITH (Format csv);`, (err) => {
//     if (err) {
//       console.log(`error copying to restaurant table: ${err}`);
//     } else {
//       console.log('successfully copied to restaurant table');
//     }
//   })
// })
