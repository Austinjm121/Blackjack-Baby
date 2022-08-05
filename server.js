const path = require('path');
const express = require('express');
// requesting sessions
const session = require('express-session');
//require handlebars
const exphbs = require('express-handlebars');
// connections information
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
//creating out handlebars express
const hbs = exphbs.create({});
// cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// session connection
app.use(session(sess));
//setting view engine. 
app.engine('handlebars', hbs.engine);
//set engine to handlevars. This is what our front end wil be
app.set('view engine', 'handlebars');
//middleware

//middleware
app.use(express.static(path.join(__dirname, 'public')));

// Sets up the routes
app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });



