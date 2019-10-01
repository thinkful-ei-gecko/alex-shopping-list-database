require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});
console.log('knex and driver installed correctly');

knexInstance.from('amazong_products').select('*')
  .then(result => {
    console.log(result)
  });