# Databases With Node Drills

## Drills
With the shopping_list table in place, make a new file inside your knex-practice project, ./src/drills.js. Inside the drills file, connect knex to your knex-practice database and write functions that can perform the following queries:

1. Get all items that contain text

    - A function that takes one parameter for searchTerm which will be any string
    - The function will query the shopping_list table using Knex methods and select the rows which have a name that contains the searchTerm using a case insensitive match.

2. Get all items paginated

    - A function that takes one parameter for pageNumber which will be a number
    - The function will query the shopping_list table using Knex methods and select the pageNumber page of rows paginated to 6 items per page.

3. Get all items added after date

    - A function that takes one parameter for daysAgo which will be a number representing a number of days.
    - This function will query the shopping_list table using Knex methods and select the rows which have a date_added that is greater than the daysAgo.

4. Get the total cost for each category

    - A function that takes no parameters
    - The function will query the shopping_list table using Knex methods and select the rows grouped by their category and showing the total price for each category.

This assignment should take about 45 minutes to complete. If you're having trouble, attend a Q&A session or reach out on Slack for help.

## POSTMORTEM

### 2019-10-01 16:11:53

The assignment is complete. Comparing my sql to the solution, I could have used `decimal()` to better structure the data to load as desired in create.shopping_list.sql:

    CREATE TABLE IF NOT EXISTS shopping_list (
    id ...
    // This line:
    price FLOAT(2) NOT NULL,
    //Should have been:
    price decimal(10, 2) NOT NULL
    ...
    );

At the end, I was trying to coerce the final data into a new format instead of defining it properly in the SQL.

The solution's sql also used `TIMESTAMP` instead of `DATE`, although I'm not sure why that's significant.

In regards to drills.js, the solution also had some more explicit output, such as including `console.log('COST PER CATEGORY)` above the result log and `.sum('price as total')` to more explicitly define what each console log was showing.
