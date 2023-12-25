const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,
Course} = require("../db/");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const newAdmin = new Admin({username: username, password: password});
    try {
        newAdmin.save();
        res.status(200).json({ message: 'Admin created successfully' });
    }
    catch (err) {
        res.status(404).send("Creating Admin unsuccessful");
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const username = req.headers.username;
    const admins = Admin.find({username: username});
    const createCourse = new Course({...req.body});
    try {
        admins.courses.push(createCourse);
        admins.save();
        createCourse.save();
        res.status(200).send({ message: 'Course created successfully', courseId: `${createCourse.id}` });
    }
    catch (err) {
        res.status(404).send({ message: 'Course not created'});
    }
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const username = req.headers.username;
    const createdCourses = Course.find({username: username});
    if (createdCourses){
        res.status(200).json(createdCourses);
    }
    else {
        res.status(404).json({ message: "Couses has not been created by admin" });
    }
});

module.exports = router;