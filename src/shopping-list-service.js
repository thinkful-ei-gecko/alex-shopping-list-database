const ShoppingListService = {
  getAllFromList(knex) {
    return knex.select('*').from('shopping_list');
  },

  getById(knex, id) {
    return knex.from('shopping_list').select('*').where({ id }).first();
  },

  insertToList(knex, newItem) {
    return knex
      .into('shopping_list')
      .insert(newItem)
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  updateListItem(knex, id, newData) {
    return knex.from('shopping_list').where({ id }).update(newData);
  },

  deleteListItem(knex, id) {
    return knex('shopping_list').where({ id }).delete();
  }
};

module.exports = ShoppingListService;