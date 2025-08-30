const express = require("express")
const router = express.Router();
const {getUserInfo} = require("../controller/getUserDetails")
const auth = require("../middleware/userMiddleware")

router.get("/getUser",auth,getUserInfo);

module.exports = router;