const express =require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//CREATE CATEGORY
router.post('/create',authMiddleware, )

module.exports = router