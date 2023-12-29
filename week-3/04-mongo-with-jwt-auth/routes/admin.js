const express = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtpassword = "3211237723"

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const newAdmin = new Admin({username: username, password: password});
    try {
        newAdmin.save();
        res.json({ message: 'Admin created successfully' });
    }
    catch (err) {
        res.status(404).send("Creating Admin unsuccessful");
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({username: username, password: password});

    if (admin){
        const token = jwt.sign({...req.body}, jwtpassword);
        res.json({
            token: token
        });
    } else {
        res.send(404).json({
            message: "Incorrect admin credentials"
        });
    } 
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const newCourse = await Course.create({...req.body});
    res.json({ 
        message: 'Course created successfully', 
        courseId: newCourse._id 
    });
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

module.exports = router;