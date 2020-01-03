const restaurantData = require('./seed/restaurantsSeed.js');
const cuisineData = require('./seed/cuisinesSeed.js');
const userData = require('./seed/usersSeed.js');
const imageData = require('./seed/imagesSeed.js');

const createFiles = () => {
  cuisineData.createFile();
  userData.createFile();
  restaurantData.createFile();
  imageData.createFile();
}

createFiles();