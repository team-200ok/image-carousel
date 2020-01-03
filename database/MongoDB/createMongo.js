const mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1:27017/restaurants'
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});
const Schema = mongoose.Schema;
const seedMongo = require('./mongoSeed.js');

let imagesSchema = new Schema({
  id : Number,
  image_url: String,
  helpful: Number,
  not_helpful: Number,
  created_at: String,
  caption: String,
  restaurant: String,
  user:
  {
    user_name: String,
    first_name: String,
    last_name: String,
    stars: Number,
    reviews: Number,
    avatar_url: String,
    elite_status: Boolean
  }
});


// let restaurantsSchema = new Schema({
//   id: Number,
//   name: String,
//   image_count: Number,
//   images: [
//     {
//       image_url: String,
//       helpful: Number,
//       not_helpful: Number,
//       created_at: String,
//       caption: String,
//       user:
//         {
//           user_name: String,
//           first_name: String,
//           last_name: String,
//           stars: Number,
//           reviews: Number,
//           avatar_url: String,
//           elite_status: Boolean
//         }
//     }
//   ]
// });

const Images = mongoose.model('Images', imagesSchema);

// const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

// const insertData = () => {
//   Restaurants.create(seedMongo())
//     .then(() => console.log('completed seeding'));
// };
const insertData = () => {
  Images.create(seedMongo())
    .then(() => console.log('completed seeding'));
};

insertData();


