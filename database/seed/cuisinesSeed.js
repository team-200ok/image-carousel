const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeRestaurants = fs.createWriteStream('database/cuisines.csv');

const writeTable = (writer, encoding) => {
    console.log('writing cuisines...')
    let i = 100;
    const write = () => {
        let ok = true;
        do {
            i -= 1;
            let cuisine = faker.address.country();
            let data = cuisine + '\n';
            if (i === 0) {
                writer.write(data, encoding);
                console.log('done writing cuisines')
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