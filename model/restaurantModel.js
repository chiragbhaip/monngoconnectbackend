const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema(
    {
        restaurantName:{
            type:String,
            required:true
        },        
        restaurantLocation:{
            address:{type:String},
            city:{type:String},
            zip:{type:Number},
            state:{type:String},
            country:{type:String},
            latitude:{type:Number},
            longitude:{type:Number},            
            
        },
        workingHours:{
            start: {type:Number},
            end: {type:Number}
        },
        activityStatus:{
            type:Boolean,
            required:true
        },
        restaurantImages:[{
            type:String,
            required:true            
        }],
        restaurantRatings:[{
            userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, //Ref of User ID
            rating: {type:Number}
        }],
        userID:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        }
    }
)

module.exports = restaurantSchema;