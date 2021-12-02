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
        let id = parseInt(req.params.id);
        try {
            let eleve = await eleveMdls.get(id);
            res.send(eleve);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    create: async(req, res) => {
        let appelation = req.body.appelation, niveau = req.body.niveau;
        try {
            let create_eleve = await eleveMdls.create(appelation, niveau);
            if(create_eleve.affectedRows == 1) return res.send("Insertion réussie")
            res.status(500).send("Insertion échec");
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    update: async(req, res) => {
        let appelation = req.body.appelation, niveau = req.body.niveau, id = req.body.id;
        try {
            let update_eleve = await eleveMdls.update(id, appelation, niveau);
            if(update_eleve.affectedRows == 1) return res.send("Modification réussie")
            res.status(500).send("Modification échec");
        } catch (error) {
            res.status(500).send(error.message);
        }
    },


}