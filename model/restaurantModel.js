const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema(
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
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'}, //Ref of User ID
            rating: {type:Number}
        }],
        userId:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'userModel'
        },
        menuDetails:[{
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
                userId: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'}, //Ref of User ID
                rating: {type:Number}
            }],
        }]
    }
)

module.exports = mongoose.model("Restaurant",restaurantSchema);