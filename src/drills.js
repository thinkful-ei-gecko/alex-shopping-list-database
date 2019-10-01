require ('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

console.log('Initial connection successful!');


//DRILL ONE
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

// searchByName('burger');

//DRILL TWO
function getPaginatedBy(pageNumber){

  knexInstance
    .select('id', 'name', 'price', 'date_added', 'checked', 'category')
    .from('shopping_list')
    .limit(6)
    .offset(6 * (pageNumber -1))
    .then(result => {
      console.log(result);
    });

}

getPaginatedBy(3);