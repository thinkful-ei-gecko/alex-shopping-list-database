const ShoppingListService = require('../src/shopping-list-service');
const testStore = require('./test-store.js');
const knex = require('knex');

describe('shoppingListService', () => {
  let db;
  let testList = testStore.testList;

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
  });
  before(() => db('shopping_list').truncate());
  afterEach(() => db('shopping_list').truncate());
  after(() => db.destroy());

  context('shopping_list loads with data', () => {
    beforeEach(() => {
      return db.into('shopping_list').insert(testList);
    });

    it('getAllFromList() returns a list with all test items', () => {
      return ShoppingListService.getAllFromList(db).then(actual => {
        expect(actual).to.eql(testList);
      });
    });

    it('getById() returns a single matching item from shopping_list by id.', ()=> {
      return ShoppingListService.getById(db, 2)
        .then(actual => {
          expect(actual).to.eql(testList[1]);
        });
    });

    it('updateListItem() changes a list item by id based on newData input.', () => {
      const update = {
        id: 3,
        name: 'Update!!',
        price: '21.21',
        date_added: new Date('2019-10-02T05:00:00.000Z'),
        checked: true,
        category: 'Main'
      };

      return ShoppingListService.updateListItem(db, 3, update)
        .then( () => ShoppingListService.getById(db, 3))
        .then(result => {
          expect(update).to.eql(result);
        });
    });

    it('deleteListItem() removes an item from shopping_list by its id', () => {
      return ShoppingListService.deleteListItem(db, 1)
        .then( () => ShoppingListService.getById(db, 1))
        .then(result => {
          expect(result).to.eql(undefined);
        })
        .then( () => ShoppingListService.getAllFromList(db))
        .then( actualResult => {
          let expectedResult = testList.filter(item => item.id !== 1);
          expect(expectedResult).to.eql(actualResult);
        });
    });

  });

  context('shopping_list loads without data', () => {
    it('insertToList() is confirmed to add item (newItem) to shopping_list.', ()=> {
      const newItem = {
        name: 'Test New Item',
        price: '3.50',
        date_added: new Date('2019-10-02T05:00:00.000Z'),
        checked: false,
        category: 'Snack'
      };
      return ShoppingListService.insertToList(db, newItem)
        .then(actual => {
          expect(actual).to.eql(
            {
              id: 1,
              name: newItem.name,
              price: newItem.price,
              date_added: newItem.date_added,
              checked: newItem.checked,
              category: newItem.category
            }
          );
        });
    });
  });
});
