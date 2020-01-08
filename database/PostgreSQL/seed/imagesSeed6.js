const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeRestaurants = fs.createWriteStream('database/PostgreSQL/images6.csv');

const writeTable = (writer, encoding) => {
    console.log('writing images...')
    let i = 10000000;
    let restaurantId = 5000000;
    let counter = 0;
    const write = () => {
        let ok = true;
        do {
            i -= 1;
            if ((counter + 10) % 10 === 0) {
              restaurantId++
            }
            counter++;
            let ranMonth = Math.floor(Math.random() * (12 - 1) + 1);
            let ranYear = Math.floor(Math.random() * (2019 - 2012) + 2012);
            let ranDay = Math.floor(Math.random() * (28 - 1) + 1);
            let image_url = `https://loremflickr.com/320/240?lock=${Math.floor(Math.random() * (10000 - 1) + 1)}` + ',';
            let helpful = Math.floor(Math.random() * 100) + ',';
            let not_helpful = Math.floor(Math.random() * 100) + ',';
            let created_at = ranYear + '-' + ranMonth + '-' + ranDay + ',';
            let cuisine_id = Math.floor(Math.random() * (100 - 1) +1) + ',';
            let user_id = Math.floor(Math.random() * (1000000 - 1) + 1) + ',';
            let caption = faker.lorem.sentence() + ',';
            let restaurant_id = restaurantId;
            let data = image_url + helpful + not_helpful + created_at + cuisine_id + user_id + caption + restaurant_id + '\n';
            if (i === 0) {
                writer.write(data, encoding);
                console.log('done writing images');
            } else {
                ok = writer.write(data, encoding);
            }
            if (i === 9000000) {
              console.log(`completed 10 percent of images6`);
            }
            if (i === 8000000) {
              console.log(`completed 20 percent of images6`);
            }
            if (i === 7000000) {
              console.log(`completed 30 percent of images6`);
            }
            if (i === 6000000) {
              console.log(`completed 40 percent of images6`);
            }
            if (i === 5000000) {
              console.log(`completed 50 percent of images6`);
            }
            if (i === 4000000) {
              console.log(`completed 60 percent of images6`);
            }
            if (i === 3000000) {
              console.log(`completed 70 percent of images6`);
            }
            if (i === 2000000) {
              console.log(`completed 80 percent of images6`);
            }
            if (i === 1000000) {
              console.log(`completed 90 percent of images6`);
            }
          } while ( i > 0 && ok);
              if (i > 0) {
                  writer.once('drain', write);
              }
          }
          write();
      }

   module.exports.createFile = () => {
        writeTable(writeRestaurants, 'utf-8');
    };