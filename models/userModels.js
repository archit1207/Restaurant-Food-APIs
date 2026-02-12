const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

//schema
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true, "Username is Required"]
  },
  email:{
    type:String,
    required: [true, "Email is Required"],
    unique: true
  },
  password:{
    type: String,
    required: [true, "Password is Required"]
  },
  address:{
    type:Array
  },
  phone:{
    type: String,
    unique: true,
    required: [true, "Phone Number is Required"]
  },
  userType:{
    type:String,
    required:true,
    default: "Client",
    enum:["Client", "Admin", "Vender", "Driver"]
  },
  profile:{
    type:String,
    default:"https://www.google.com/imgres?q=profile%20photo&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F10%2F05%2F22%2F37%2Fblank-profile-picture-973460_640.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&docid=wg0CyFWNfK7o5M&tbnid=fatsOmun-m-BWM&vet=12ahUKEwjg9c2u18-SAxVHQ2cHHVwaLLEQnPAOegQIdxAB..i&w=640&h=640&hcb=2&ved=2ahUKEwjg9c2u18-SAxVHQ2cHHVwaLLEQnPAOegQIdxAB"
  }
},{timestamps:true}
);

//export

module.exports = mongoose.model('User', userSchema)

