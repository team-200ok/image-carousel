const { Pool } = require('pg')
const pool = new Pool({
  host: 'localhost',
  user: 'young',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
let promiseArr = [];
for (let i = 0; i < 100000; i++) {
  let queryStr = 'INSERT INTO weather(city, temp_lo, temp_hi, prcp, date) VALUES($1, $2, $3, $4, $5) RETURNING *'
  let values = ['Los Angeles', 1, 2, 0.5, '1994-09-05']
  let promise = pool.query(queryStr, values, (err, result) => {
    if (err) {
      return console.error('Error executing query', err.stack)
    }
  })
  promiseArr.push(promise);
  if (i === 100000) {
    console.log('finishing seeding promises')
  }
}
Promise.all(promiseArr)
.then(()=> console.log('finished seeding db'))
.catch(()=> console.log('error seeding database'))