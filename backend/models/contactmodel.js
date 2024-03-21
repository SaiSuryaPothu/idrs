const mongoose = require("mongoose");
const validator = require('validator');
const contactschema = new mongoose.Schema({
    name:{
        type: "String",
        required : [true , "Name is required"],
        minLength : [3,"Name must conatin atleast 3 Characters"]
    },
    email: {
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please provide valid email!"]
    },
    subject: {
        type: String,
        required: [true, "Subject Required!"],
        minLength: [5, "Subject must contain at least 5 characters!"]
    },
    message: {
        type: String,
        required: [true, "Message Required!"],
        minLength: [10, "Message must contain at least 10 characters!"],
    },

})
const messagemodel = mongoose.model("Message", contactschema)

module.exports = messagemodel;


