const express = require('express');
const fileUpload = require("express-fileupload");
const compression = require('compression')

const app = express();

app.use((req, res, next) => {
  //d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
  res.setHeader('Access-Control-Allow-Origin', '*');
  //d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  //d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//body-parser analyse le corps de la demande
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(compression());

const eleveRoute = require('./routes/eleve');
app.use('/api/eleve', eleveRoute);

const userRoute = require('./routes/user');
app.use('/api/user', userRoute);

module.exports = app;
