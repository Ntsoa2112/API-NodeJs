const db = require('../service/connect');

module.exports = {
    getListEleve: () => {
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