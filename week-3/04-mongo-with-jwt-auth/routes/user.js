const express = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const jwtpassword = "182392731984712394";

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username: username, 
        password: password
    });
    res.json({ 
        message: "User created successfully" 
    });  
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({username: username, password: password});

    if (user){
        const token = jwt.sign({...req.body}, jwtpassword);
        res.json({
            token: token
        });
    } else {
        res.send(404).json({
            message: "Incorrect user credentials"
        });
    } 
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({
        username: username
    });

    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses
        }
    });
    console.log(courses);
    res.json({
        courses: courses
    });
});

module.exports = router