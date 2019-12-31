const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeRestaurants = fs.createWriteStream('database/images.csv');

const writeTable = (writer, encoding) => {
    console.log('writing images...')
    let i = 100000000;
    let restaurantId = 0;
    let counter = 0;
    const write = () => {
        let ok = true;
        do {
            i -= 1;
            if ((counter + 10) % 10 === 0) {
              restaurantId++
            }
            counter++;
            let image_url = `https://loremflickr.com/320/240?lock=${Math.floor(Math.random() * (10000 - 1) + 1)}` + ',';
            let helpful = Math.floor(Math.random() * 100) + ',';
            let not_helpful = Math.floor(Math.random() * 100) + ',';
            let cuisine_id = Math.floor(Math.random() * (100 - 1) +1) + ',';
            let user_id = Math.floor(Math.random() * (1000000 - 1) + 1) + ',';
            let caption = faker.lorem.sentence() + ',';
            let restaurant_id = restaurantId;
            let data = image_url + helpful + not_helpful + cuisine_id + user_id + caption + restaurant_id + '\n';
            if (i === 0) {
                writer.write(data, encoding);
                console.log('done writing images')
            } else {
                ok = writer.write(data, encoding);
            }
            if (i === 90000000) {
              console.log(`completed 10 percent of images`);
            }
            if (i === 80000000) {
              console.log(`completed 20 percent of images`);
            }
            if (i === 70000000) {
              console.log(`completed 30 percent of images`);
            }
            if (i === 60000000) {
              console.log(`completed 40 percent of images`);
            }
            if (i === 50000000) {
              console.log(`completed 50 percent of images`);
            }
            if (i === 40000000) {
              console.log(`completed 60 percent of images`);
            }
            if (i === 30000000) {
              console.log(`completed 70 percent of images`);
            }
            if (i === 20000000) {
              console.log(`completed 80 percent of images`);
            }
            if (i === 10000000) {
              console.log(`completed 90 percent of images`);
            }
        } while ( i > 0 && ok);
            if (i > 0) {
                writer.once('drain', write);
            }
    }

   module.exports.createFile = () => {
        writeTable(writeRestaurants, 'utf-8');
    }