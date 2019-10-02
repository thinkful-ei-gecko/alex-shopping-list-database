# Building Services

## Drill

Following from the previous assignment, you should already have a table called shopping_list inside your knex-practice database. Make a new file in your knex-practice project for ./src/shopping-list-service.js that contains methods for CRUD: to get, insert, update and delete shopping list items. Also, make a ./test/shopping-list-service.spec.js file that tests the CRUD methods.

## POSTMORTEM

### 2019-10-02 18:34:55

All services are up and running. Learned that the decimals numbers in sql are interpreted as strings when part of a select call, so the tests reflect this. The test for `getAllItems()` in the solution maps the 'checked: false' feature as a decoration to the data, which is interesting. There's a lot more use of spread operators here as opposed to my used of `.eql()` and fewer constants - it is more legible to have them separated, and the spread is a fast easy way to include the constant properly. It is something I should at least try to be practicing with more. But I'm happy with how short my code ended up being.
