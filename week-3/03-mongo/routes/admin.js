const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin} = require('../db/index');
const router = Router();

// Admin Routes
app.post('/signup', (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    // check if this user already exist
    let admin = await Admin.findOne({
        username:username,
        password:password
    })
    if(admin){
        res.json({message:"this admin already exist"})
    }
    else{
        let admin = await Admin.create({
            username : username,
            password : password
        })
        res.json(admin);
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;