
//Import du model de config de la bd
require('./models/db');
// Importe le module Express.js  utilisé pour créer et gérer des applications web.
const express = require ('express');
const path = require('path');
const bodyparser=require('body-parser');

//Importe le module Express Handlebars, qui est un moteur de modèle pour Express.
const exphbs = require('express-handlebars');

//Import du controlleur contenant les routes
const projetControllers = require('./controllers/projetControllers');

//Initialisation une instance de l'application Express
var app = express();
app.use(bodyparser.urlencoded({
    extended: true   
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs ({extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + '/views/layout'}));
app.set('view engine', 'hbs');


app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
});
app.use('/projet', projetControllers);

