const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema(
    {
        foodName:{
            type:String,
            required:true,
        },
        foodDescription:{
            type:String,
            required :true
        },
        foodPrice:{
            type:Number,
            required:true
        },
        foodType:{
            type:String,
            required:true
        },
        foodRating:[{
                Key:String,
                Value:Number
        }]
    }
)

module.exports = foodSchema;