const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            // required:true
        },
        lastName:{
            type:String,
            // required:true
        },
        email:{
            type:String,
            // required:true
            unique:true
        },
        password:{
            type:String,
            // required:true
        },
        birthDate:{
            type: Date ,
            // required:true
        },
        gender:{
            type:String,
            // required:true
        },
        
        mobileNumber:{
            type:Number,
            // required:true
        },
        role:[
            {
                type:String,
                // required:true
            }
        ],
        deliveryExecutive:{
            vehicleNumber:{
                type:String, // think for data type
                // required:true,
            },
            deliveryExecutiveLocation:{
                address:{type:String},
                city:{type:String},
                zip:{type:Number},
                state:{type:String},
                country:{type:String},
                latitude:{type:Number},
                longitude:{type:Number},               
            },
            activityStatus:{
                type:Boolean,
                // required:true
            },
            deliveryExecutiveRatings:[{
                userID: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'}, //Ref of User ID
                rating: {type:Number}
            }],
        },
        cart:{
            restaurantId:{
               type: String
            },
            foodList: [{
                    foodId: {type:String}, //Ref of User ID
                    quantity: {type:Number}
            }],
        }
    }
)

module.exports = userSchema;