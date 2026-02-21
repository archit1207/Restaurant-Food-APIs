const express =require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createCategoryController, getAllCategoryController, updateCategoryController, deleteCategoryController } = require("../controllers/categoryController");
const router = express.Router();

//CREATE CATEGORY
router.post('/create',authMiddleware, createCategoryController)

//get all CATEGORY
router.get('/allcategories',authMiddleware, getAllCategoryController)

//Update CATEGORY
router.put("/updatecategory/:id", authMiddleware, updateCategoryController);

//Delete CATEGORY
router.delete("/delete/:id", authMiddleware, deleteCategoryController);

module.exports = router