const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema(
    {
        foodName:{
            type:String,
            required:true,
        },
        foodType:{
            type:String,
            required:true
        },
        foodCategory:[{
             type:String
        }],
        foodDescription:{
            type:String,
            required :true
        },
        foodImage:{
            type:String, //Buffer later 
            required:true
        },
        foodPrice:{
            type:Number,
            required:true
        },
        foodRating:[{
            userID: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'}, //Ref of User ID
            rating: {type:Number}
        }],
        restaurantId:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'restaurantModel',
        }
    }
)

module.exports = foodSchema;