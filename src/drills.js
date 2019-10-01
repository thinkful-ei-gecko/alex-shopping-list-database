require ('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

console.log('Initial connection successful!');

function searchByName(searchTerm) {
  knexInstance
    .select('name', 'price', 'date_added', 'checked', 'category')
    .from('shopping_list')
    .where(
      'name',
      'ILIKE',
      `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

searchByName('burger');