const User = require("../models/userModel");

exports.getUserInfo = (req, res) =>{

    res.json({
        success: true,
        user: req.user
    })
}

 