const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ 
      success: false, 
      error: 'Token is required' 
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      // Check for different types of errors
      let errorMessage = 'Invalid or expired token';
      let errorStatus = 401;

      // If the error is token expiration, send a specific message
      if (err.name === 'TokenExpiredError') {
        errorMessage = 'Token has expired';
        errorStatus = 401;
      }

      return res.status(errorStatus).json({
        success: false,
        error: errorMessage
      });
    }

    // Attach decoded data to the request object for further use in routes
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
