const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        orderLocation:{
            address:{type:String},
            city:{type:String},
            zip:{type:Number},
            state:{type:String},
            country:{type:String},
            latitude:{type:Number},
            longitude:{type:Number},            
            
        },
        totalAmount:{
            type:Number,
            required:true
        },
        orderStatus:{
            type:String,
            required:true
        },
        orderDateAndTime:{
            type:Date,
            required:true
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'userModel'
        },
        foodIds:[
            {
                _id:String,
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
            }
        ],
        restaurantDetails:{
            _id:String,
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
            restaurantImages:[{
                type:String,
                required:true            
            }],
        },
        deliveryExecutiveId:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'deliveryExecutiveModel'
        },

    }
)

module.exports = orderSchema;