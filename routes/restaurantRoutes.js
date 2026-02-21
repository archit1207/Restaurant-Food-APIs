const express =require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createRestaurantController, getAllRestaurantController, getRestaurantController, deleteRestaurantController } = require("../controllers/restaurantController");
const router = express.Router();

//routes

// CREATE RESTAURANT || POST
router.post('/create',authMiddleware, createRestaurantController)

// Get All RESTAURANT || GET
router.get('/allrestaurant',authMiddleware, getAllRestaurantController)

// Get RESTAURANT by ID || GET
router.get('/restaurant',authMiddleware, getRestaurantController)

// DELETE RESTAURANT || DELETE
router.delete('/deleterestaurant',authMiddleware, deleteRestaurantController)

module.exports = router;