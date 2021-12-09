const db = require('../service/connect');

module.exports = {
    insertion: (email, hash, nom, prenom, appelation, droit) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO user(email, password, nom, prenom, appelation, droit) VALUES(?,?,?,?,?,?)",
            [email, hash, nom, prenom, appelation, droit], function(err, resultats){
              if(err) reject(new Error("Erreur insertion user"));
              resolve("Success insertion");
            })
        })
    },

    get: (id, email, colonne_password = '') => {
        return new Promise((resolve, reject) => {
            db.query("SELECT id, email, nom, prenom, appelation, droit "+colonne_password+" FROM user WHERE id = ? OR email = ?", [id, email] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource get élève"));
              resolve(resultat[0]);
            })
        })
    }

}