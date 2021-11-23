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
    },

    create: (appeltion, niveau) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO eleve(appelation, niveau) VALUES(?,?)", [appeltion, niveau] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource create élève"));
              resolve(resultat);
            })
        })
    },

    update: (id, appelation, niveau) => {
        return new Promise((resolve, reject) => {
            db.query("UPDATE eleve SET appelation = ?, niveau = ? WHERE id = ?", [appelation, niveau, id] , function(err, resultat){
              if(err) reject(new Error("Erreur ressource create élève"));
              resolve(resultat);
            })
        })
    }

}