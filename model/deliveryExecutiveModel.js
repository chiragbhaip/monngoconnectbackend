const mongoose = require('mongoose');

const deliveryExecutiveSchema = new mongoose.Schema(
    {
        vehicleNumber:{
            type:String, // think for data type
            required:true,
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
            required:true
        },
        deliveryExecutiveRatings:[{
            userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, //Ref of User ID
            rating: {type:Number}
        }],
        userId:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'userModel'
        }
    }
)

module.exports = deliveryExecutiveSchema;