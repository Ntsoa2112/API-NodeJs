const bcrypt = require("bcrypt");
const service = require("../service/service");
const userMdls = require("../models/user");
const saltRounds = 10;

module.exports = {

  register: async function (req, res) {
    var email = req.body.email,
      mdp1 = req.body.password,
      mdp2 = req.body.confirm_password,
      nom = req.body.nom,
      prenom = req.body.prenom,
      appelation = req.body.appelation, 
      droit = req.body.droit;

    try {
        let verification_email = await userMdls.get(null, email);
        if(!verification_email){
            if(mdp1 === mdp2){
                bcrypt.hash(mdp1, saltRounds, async function(err, hash){
                    if (err) res.status(500).send(err);
                    try {
                        let insertion = await userMdls.insertion(email, hash, nom, prenom, appelation, droit);
                        let resultat = await userMdls.get(null, email);
                        const token = service.generer_token(resultat.id, email);
                        res.send({
                            id: resultat.id,
                            token: token,
                            nom: resultat.nom,
                            prenom: resultat.prenom,
                            appelation: resultat.appelation,
                        });
                    } catch (error) {
                        res.status(403).send(error.message);
                    }
                })
            }
            else{
                res.status(403).send("Confirmation mot de passe incorrecte");
            }
        }
        else{
            res.status(403).send("Adresse email déjà utilisé");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }

  },

  login: async(req, res) => {
    var email = req.body.email, mdp = req.body.password;
    try {
        let user = await userMdls.get(null, email, ",password");
        if(user){
            bcrypt.compare(mdp, user.password, function(err, verifier){
                if (err) return res.status(403).send("Mot de passe incorrecte");
                if(verifier){
                    const token = service.generer_token(user.id, email);
                    res.send({
                        id: user.id,
                        token: token,
                        nom: user.nom,
                        prenom: user.prenom,
                        appelation: user.appelation,
                    });
                }
                else{
                    res.status(403).send("Mot de passe incorrecte");
                }
            })
        }
        else{
            res.status(403).send("Vous n'avez pas de compte");
        }
    } catch (error) {
        res.status(500).send(error);
    }
  },

};
