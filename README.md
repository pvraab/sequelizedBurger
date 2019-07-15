# Burger 2: The Sequel

### Overview

This app provides a burger eating logger with MySQL, Node, Express, Handlebars and a sequelize ORM. Following the MVC design pattern; I used Node and a sequelize ORM to query a MySQL database and route data in the app. Handlebars is used to generate the HTML.

### GitHub Access

- [Source code repository](<https://github.com/pvraab/sequelizedBurger>)
- [Application URL](<https://pvraab-sequelizeburger.herokuapp.com/>) - Hosted on Heroku so we can run the Express server and use the JawsDB MySQL addon.

### Detailed Functionality

- Consume Grilled Beef Disks! is a restaurant app that lets users input the names of burgers they'd like to eat.
- Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
- Each burger in the waiting area also has a `Eat It!` button. When the user clicks it, the burger will move to the right side of the page.
- There is also a `Delete!` button for deleting an entry from the screen and a `Return!` button to move it from the right of the screen back to the left side..
- The app stores every burger in a database, whether devoured or not.

#### MySQL Database Setup

- Database called `sequelize_burgers_db`.
- Use a `burgers` table with these fields:
  - **id**: an auto incrementing int that serves as the primary key.
  - **burgerName**: a string.
  - **isDevoured**: a boolean.

#### Application Design

- A `config.json` file inside `config` directory specifies the database connection parameters.
- The db directory contains a schema.sql to create the database and a seeds.sql file to put data in the tables. 
- The models directory contains the JS files to define the database tables using sequelize.
- The public directory is the static directory to define the CSS and JS for use by the Handlebars views and layouts.
- The routes directories contain the JS files defining the API and HTML routes for the app.
- The views directory contains the Handlebars views and layouts for the app.
- server.js is the main node.js code for the app. Uses Express to define the server.

------

### Technologies Used

- JavaScript
- jQuery
- Express
- AJAX
- npm package path
- BootStrap
- HandleBars
- MySQL
- Sequelize ORM
- Heroku
- Node.js
- MVC Design Pattern

### Portfolio

Click on my Portfolio at my portfolio page at: <https://pvraab.github.io/RaabPortfolio/> to see the link to this app.