const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ 
      success: false, 
      error: 'Token is required' 
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      let errorMessage = 'Invalid or expired token';
      let errorStatus = 401;

      if (err.name === 'TokenExpiredError') {
        errorMessage = 'Token has expired';
        errorStatus = 401;
      }

      return res.status(errorStatus).json({
        success: false,
        error: errorMessage
      });
    }

    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
