const eleveMdls = require('../models/eleve');
const fs = require('fs');

module.exports = {
    list: async (req, res) => {
        let listEleve = await eleveMdls.getListEleve();
        res.send(listEleve);
    },

    get: async(req, res) => {
        let id = req.query.id ? parseInt(req.query.id) : parseInt(req.body.id);
        let eleve = await eleveMdls.get(id);
        res.send(eleve);
    },

}