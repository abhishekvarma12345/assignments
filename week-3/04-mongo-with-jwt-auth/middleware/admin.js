const {Admin} = require('../db');
const jwt = require('jsonwebtoken');
const jwtpassword = "3211237723";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")[1];

    try {
        const auth = jwt.verify(token, jwtpassword);
        next();
    }
    catch (err) {
        res.json({
            message: `Authentication failure: ${err.message}`
        });
    }
    
}

module.exports = adminMiddleware;