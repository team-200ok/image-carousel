const restaurantData = require('./seed/restaurantsSeed.js');
const cuisineData = require('./seed/cuisinesSeed.js');
const userData = require('./seed/usersSeed.js');
const imageData = require('./seed/imagesSeed.js');
const imageData2 = require('./seed/imagesSeed2.js');
const imageData3 = require('./seed/imagesSeed3.js');
const imageData4 = require('./seed/imagesSeed4.js');
const imageData5 = require('./seed/imagesSeed5.js');
const imageData6 = require('./seed/imagesSeed6.js');
const imageData7 = require('./seed/imagesSeed7.js');
const imageData8 = require('./seed/imagesSeed8.js');
const imageData9 = require('./seed/imagesSeed9.js');
const imageData10 = require('./seed/imagesSeed10.js');


const createFiles = () => {
  cuisineData.createFile();
  userData.createFile();
  restaurantData.createFile();
  imageData.createFile();
  imageData2.createFile();
  imageData3.createFile();
  imageData4.createFile();
  imageData5.createFile();
  imageData6.createFile();
  imageData7.createFile();
  imageData8.createFile();
  imageData9.createFile();
  imageData10.createFile();
}

createFiles();