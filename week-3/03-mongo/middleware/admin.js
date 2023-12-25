const {
    Admin
  } = require('../db/');
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const adminExists = Admin.find({username: username});
    if (adminExists && adminExists.password === password) {
        next();
    }
    else {
        res.status(403).send("Incorrect admin credentials");
    }
}

module.exports = adminMiddleware;