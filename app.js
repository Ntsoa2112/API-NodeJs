const express = require('express');
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
app.use(express.static("public"));

const eleveCtrl = require('./routes/eleve');
app.use('/api/eleve', eleveCtrl);

module.exports = app;
