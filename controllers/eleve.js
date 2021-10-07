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