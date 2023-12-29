const express = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db");
const router = express.Router();

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