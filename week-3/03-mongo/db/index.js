const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:RPTpR5RAEbztKOpe@cluster0.nnfqq.mongodb.net/?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    courses: []
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: []
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id: Number,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});
CourseSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}