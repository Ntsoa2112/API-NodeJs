const jwt = require("jsonwebtoken");
const SECRET = "mykey";

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
}