const eleveMdls = require('../models/eleve');

module.exports = {
    list: async (req, res) => {
        let listEleve = await eleveMdls.getList();
        res.send(listEleve);
    },

    get: async(req, res) => {
        let id = req.query.id ? parseInt(req.query.id) : parseInt(req.body.id);
        let eleve = await eleveMdls.get(id);
        res.send(eleve);
    },

}