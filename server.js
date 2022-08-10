const express = require("express");
// requesting sessions
const session = require("express-session");
// require unique id generator
const uuid = require('./helpers/uuid');
//require handlebars
const exphbs = require("express-handlebars");
//creating out handlebars express
const hbs = exphbs.create({});
const path = require("path");

const SequelizeStore = require("connect-session-sequelize")(session.Store);
// connections information
const sequelize = require("./config/connection");
// authorization to cookies in progress
const withAuth = require("./utils/auth");
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;


// Cookies

const sess = {
  // requests uuid from login
  // genid: function(req) {
  //   return uuid(loginForm())
  // },
  secret: "The House always wins",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    overwrite: true,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),

};

// session connection
app.use(session(sess))


//setting view engine.
app.engine("handlebars", hbs.engine);
//set engine to handlevars. This is what our front end wil be
app.set("view engine", "handlebars");
//middleware

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Sets up the routes
app.use(require("./controllers/index"));

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("Server listening on: http://localhost:" + PORT)
  );
}); 

