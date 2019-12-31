// **MONGO SCHEMA**

let commentorSchema = new Schema({
  user_name: String,
  first_name: String,
  last_name: String,
  reviews: Number,
  avatar_url: String
})

let imageSchema = new Schema({
  image_url: String,
  helpful: Number,
  not_helpful: Number,
  date: Date,
  cuisine: String,
  commentor: [commentorSchema]
})

let resterauntSchema = new Schema({
  name: String,
  genre: String,
  images: [imageSchema],
  image_count: Number
})

