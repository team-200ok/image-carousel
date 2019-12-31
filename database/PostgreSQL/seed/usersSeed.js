const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeRestaurants = fs.createWriteStream('database/PostgreSQL/users.csv');

const writeTable = (writer, encoding) => {
    console.log('writing users...')
    let i = 1000000;
    const write = () => {
        let ok = true;
        do {
            i -= 1;
            let user_name = faker.internet.userName() + ',';
            let first_name = faker.name.firstName() + ',';
            let last_name = faker.name.lastName() + ',';
            let stars = Math.floor(Math.random() * 1000) + ',';
            let reviews = Math.floor(Math.random() * 150) + ',';
            let avatar_url = `https://loremflickr.com/320/240?lock=${Math.floor(Math.random() * (10000 - 1) + 1)}` + ',';
            let elite_status = faker.random.boolean();
            let data = user_name + first_name + last_name + stars + reviews + avatar_url + elite_status + '\n';
            if (i === 0) {
                writer.write(data, encoding);
                console.log('done writing users')
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