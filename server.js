
const path = require('path');
const express = require('express');
//require handlebars
const exphbs = require('express-handlebars');


//creating out handlebars express
const hbs = exphbs.create({});
//setting view engine. 
app.engine('handlebars', hbs.engine);
//set engine to handlevars. This is what our front end wil be
app.set('view engine', 'handlebars');
//middleware

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.static(path.join(__dirname, 'public')));

// Sets up the routes


// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });



