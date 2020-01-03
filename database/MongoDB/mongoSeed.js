const faker = require('faker');

const seedMongo = () => {
  let mongo = [];
  for (let i = 0; i < 30000; i++) {
    if (i % 3000 === 0) {
      console.log('left :', (30000 - i));
    }
    let image = {};
      image.id = i;
      image.image_url = `https://loremflickr.com/320/240?lock=${Math.floor(Math.random() * (10000 - 1) + 1)}`;
      image.helpful = Math.floor(Math.random() * 100);
      image.not_helpful = Math.floor(Math.random() * 100);
      image.created_at = faker.date.recent();
      image.caption = faker.lorem.sentence();
      image.restaurant = faker.lorem.word();
      image.user = {};
      image.user.user_name = faker.internet.userName();
      image.user.first_name = faker.name.firstName();
      image.user.last_name = faker.name.lastName();
      image.user.stars = Math.floor(Math.random() * 1000);
      image.user.reviews = Math.floor(Math.random() * 150);
      image.user.avatar_url = `https://loremflickr.com/320/240?lock=${Math.floor(Math.random() * (10000 - 1) + 1)}`;
      image.user.elite_status = faker.random.boolean();
    mongo.push(image);
  }
  return mongo;
}

module.exports = seedMongo;