const mongoose = require('mongoose');
const validator = require('validator');

const authorSchema = new mongoose.Schema( {
    fName: {
        type:String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"],
        required: true
    },
    email: {
        type:String ,
         required:true,
         validate(value){
             if( !validator.isEmail(value)){
                 throw new error("email is invalid")
             }
         }
    
        
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true });


module.exports = mongoose.model('Author', authorSchema)
