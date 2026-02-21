const mongoose = require("mongoose");

//schema
const foodSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true, "Food Title is Required"]
    },
    description:{
        type:String,
        required:[true, "food description is required"]
    },
    price:{
        type:Number,
        required:[true, "Food price is Required"]
    },
    imageUrl:{
        type:String,
        default: 'https://www.freepik.com/free-vector/restaurant-tasty-food-logo-design_23254597.htm#fromView=keyword&page=1&position=0&uuid=60c6d53c-b6fc-49ad-ad10-b6be8388f872&query=Food+logo'
    },
    foodTag:{
        type:String
    },
    category:{
        type:String,
        ref:'Category'
    },
    code:{
        type:String,
    },
    isAvailable:{
        type:Boolean,
        default: true
    },
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Restaurant'
    },
    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5
    },
    ratingCount: {
        type: String
    },


}, { timestamps: true }
);

//export

module.exports = mongoose.model('Food', foodSchema)

