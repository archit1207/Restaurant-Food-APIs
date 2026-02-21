const categoryModel = require("../models/categoryModel")

const createCategoryController = async (req, res) => {
    try {
        const { title, imageUrl } = req.body;

        if (!title) {
            return res.status(500).send({
                success: false,
                message: "Please Provide Category Title or Image",
            });
        }

        const newCategory = new categoryModel({ title, imageUrl });

        await newCategory.save();

        res.status(201).send({
            success: true,
            message: "Category Created Successfully",
            newCategory,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Create Category API",
            error,
        });
    }
};

const getAllCategoryController = async(req,res) => {
    try {
        const categories = await categoryModel.find({})
        if(!categories){
            return res.status(404).send({
                success:false,
                message:"No Category Found"
            })
        }

        res.status(200).send({
            success:true,
            message: "categories Fetched Successfully",
            totalCount:categories.length,
            categories
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            succes:false,
            message:"Error in Get All Category Controller"
        })
    }
}

const updateCategoryController = async(req,res) => {
    try {

        const { id } = req.params
        const { title, imageUrl } = req.body

        const updatedCategory = await categoryModel.findByIdAndUpdate(id, {title, imageUrl}, {new: true})

        if(!updatedCategory){
            return res.status(500).send({
                success:false,
                message:"No Category Found"
            })
        }
        res.status(200).send({
            success: true,
            message: "Category Updated Successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Update Category API",
            error
        })
    }
}

const deleteCategoryController = async(req,res) => {
    try {
        const { id } = req.params

        if(!id){
            return res.status(500).send({
                success:false,
                message: "Please provide Category ID"
            })
        }

        const category = await categoryModel.findById(id)
        if(!category){
            return res.status(404).send({
                success:false,
                message: "No Category Found With this API"
            })
        }
        await categoryModel.findByIdAndDelete(id)

        res.status(200).send({
            success: true,
            message:"Category Deleted Successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Delete Category API"
        })
    }
}

module.exports = { createCategoryController, getAllCategoryController, updateCategoryController, deleteCategoryController }