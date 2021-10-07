# API-NodeJs

The goal of this project is to create an API structure that is easy to use and secure. API-NodeJs makes data available for other applications to use, so the main functionality found in this API is structured data exposure

# Installation procedure

1- npm install
2- Import the base.sql database
3- Create the environment variable .env file, then copy the content of .env.example into .env, after adding the name of your database, the password and all the necessary configurations
4- npm run start

# Code sample
```Javascript

controllers/eleve.js

const eleveMdls = require('../models/eleve');

module.exports = {
    list: async (req, res) => {
        try {
            let listEleve = await eleveMdls.getList();
            res.send(listEleve);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    get: async(req, res) => {
        let id = req.query.id ? parseInt(req.query.id) : parseInt(req.body.id);
        try {
            let eleve = await eleveMdls.get(id);
            res.send(eleve);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

}



models/eleve.js

const db = require('../service/connect');

module.exports = {
    getList: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM eleve", function(err, resultats){
              if(err) reject(new Error("Erreur ressource list élèves"));
              resolve(resultats);
            })
        })
    },

    get: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM eleve WHERE id = ?", [id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get élève"));
              resolve(resultat);
            })
        })
    }

}

```