
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name TEXT,
  genre INTEGER REFERENCES genres(id),
  image_count SMALLINT,
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  image_url TEXT,
  helpful SMALLINT,
  not_helpful SMALLINT,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  genre INTEGER REFERENCES genres(id),
  user INTEGER REFERENCES users(id),
  caption TEXT
  restaurant INTEGER REFERENCES restaurants(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR (50),
  first_name VARCHAR (50),
  last_name VARCHAR (50),
  stars SMALLINT,
  reviews SMALLINT,
  avatar_url TEXT,
  elite_status BOOLEAN
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre TEXT
);
