const ArticlesService = require('../src/articles-service');
const knex = require('knex');

describe('Articles service object', function() {
  let db;
  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
  });

  describe('getAllArticles()', () => {
    // eslint-disable-next-line quotes
    it('resolves all articles from \'blogful_articles\'', () => {
      //test that ArticlesService.getAllArticles gets data from table
    });
  });
});
