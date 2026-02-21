const mongoose = require("mongoose");


//schema
const categorySchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true, 'category title is required']
    },
    imageUrl:{
        type:String,
        default: "https://www.freepik.com/free-vector/restaurant-tasty-food-logo-design_23254597.htm#fromView=keyword&page=1&position=0&uuid=60c6d53c-b6fc-49ad-ad10-b6be8388f872&query=Food+logo"
    }

}, { timestamps: true }
);

//export

module.exports = mongoose.model('Category', categorySchema)

