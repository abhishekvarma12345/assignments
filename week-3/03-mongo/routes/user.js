const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, 
    Course
} = require("../db/");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({username: username, password: password});
    console.log("inside signup");
    try {
        newUser.save();
        res.status(200).json({ message: "User created successfully" });
    }
    catch (err) {
        res.status(404).send("Creating user unsuccessful");
    }  
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const allCourses = Course.find();
    res.status(200).json(allCourses);
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = parseInt(req.params.courseId);
    const courseFound = Course.find({id: courseId});
    const curUser = User.find({username: username});
    if (courseFound){
        curUser.purchasedCourses.push(courseFound);
        curUser.save();
        res.status(200).json({ message: 'Course purchased successfully' })
    }
    else {
        res.status(404).json({ message: 'Course not found' });
    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const curUser = User.find({username: username});
    const coursesExists = curUser.purchasedCourses;
    if (coursesExists){
        res.status(200).json(coursesExists);
    }
    else {
        res.status(404).json({ message: 'No courses purchased' });
    } 
});


module.exports = router;