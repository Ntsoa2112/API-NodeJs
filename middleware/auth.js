const jwt = require('jsonwebtoken'); 

module.exports = {
  user_connecter: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'mykey');
      const userId = decodedToken.id;
      if (req.body.id && req.body.id !== userId) {
        throw 'Invalid user ID';
      } else {
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!')
      });
    }
  },

}