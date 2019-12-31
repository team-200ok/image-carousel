const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeRestaurants = fs.createWriteStream('database/restaurants.csv');

const writeTable = (writer, encoding) => {
    console.log('writing restaurants...')
    let i = 10000001;
    const write = () => {
        let ok = true;
        do {
            i -= 1;
            let name = faker.commerce.productName() + ',';
            let cuisine_id = Math.floor(Math.random() * (99- 1) + 1) + ',';
            let image_count = Math.floor(Math.random() * (10 - 8) + 8);
            let data = name + cuisine_id + image_count + '\n';
            if (i === 0) {
                writer.write(data, encoding);
                console.log('done writing restaurants')
            } else {
                ok = writer.write(data, encoding);
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
    }