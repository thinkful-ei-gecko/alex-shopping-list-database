const shoppingListService = {
  getAllFromShoppingList(knex) {
    return Promise.resolve('Get All Chained!');
  },

  insertToShoppingList(knex, newItem) {
    return Promise.resolve('Item Inserted Chained!');
  },

  updateShoppingListItem(knex, id, newData) {
    return Promise.resolve('Update Chained!');
  },

  deleteShoppingListItem(knex, id) {
    return Promise.resolve('Delete Chained!');

  }
};