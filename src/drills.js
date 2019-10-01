require('dotenv').config();
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
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

// searchByName('burger');

//DRILL TWO
function getPaginatedBy(pageNumber) {
  knexInstance
    .select('id', 'name', 'price', 'date_added', 'checked', 'category')
    .from('shopping_list')
    .limit(6)
    .offset(6 * (pageNumber - 1))
    .then(result => {
      console.log(result);
    });
}

getPaginatedBy(3);

//DRILL THREE

function getItemsAfter(daysAgo) {
  knexInstance
    .select('id', 'name', 'price', 'date_added', 'checked', 'category')
    .from('shopping_list')
    .where(
      'date_added',
      '>',
      knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo))
    .then(result => {
      console.log(result);
    });
}

// getItemsAfter(2);

//DRILL FOUR

function costByCategory() {
  knexInstance
    .select('category')
    .sum('price')
    .from('shopping_list')
    .groupBy('category')
    .orderBy('category', 'asc')
    .then(result => {
      console.log(result);
    });
}

costByCategory();