const {User} = require('../db');
const jwt = require('jsonwebtoken');
const jwtpassword = "182392731984712394";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
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

module.exports = userMiddleware;