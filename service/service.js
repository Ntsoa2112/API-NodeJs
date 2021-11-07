const jwt = require("jsonwebtoken");
const SECRET = "mykey";
const fs = require("fs");

module.exports = {
    generer_token: function (id, email) {
        const token = jwt.sign(
            {
                id: id,
                email: email,
            },
            SECRET,
            { 
                expiresIn: "2d" 
            }
        );
        return token;
    },

    uploadFile: function (chemin, fichier, add_name) {
        return new Promise((resolve, reject) => {
            let uploadPath, current_time = new Date().getTime(), nom_img;
    
            if (!fichier) {
              reject("No files were uploaded.");
            }
        
            let fichier_name = fichier.name.split(".");
            let ext = fichier_name[fichier_name.length - 1];
            nom_img = add_name + "_iTeams-s_" + current_time + "." + ext;
            uploadPath = chemin + nom_img;
        
            fichier.mv(uploadPath, function (err) {
              if (err) reject(err);
              resolve(uploadPath)
            });
        })
      },
    
      deleteFile: function (path) {
        if (path) {
          try {
            fs.unlink(path, (err => {
                if (err) throw err;
                else {
                    return true;
                }
              }));            
          } catch (err) {
            throw err;
          }
        } else {
          throw "Aucun chemin";
        }
      },
}
