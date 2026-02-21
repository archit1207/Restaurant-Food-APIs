const categoryModel = require("../models/categoryModel");

const createCategoryController = () => {
    try {
        const {title, imageUrl} = req.body
        //validation 
        if(!title){
            return res.status(500).send({
                success:false,
                message:"Please Provide Category Title or Image"
            })
        }
        const newCategory = new categoryModel({title, imageUrl});

        await newCategory.save()
        res.status(201).send({
            success:true,
            message: "Category Created Successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: "Error in Create Restaurant API"
        })
    }
}




module.exports = { 
    createCategoryController,

}