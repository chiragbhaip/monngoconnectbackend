const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        birthDate:{
            type: Date ,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        
        mobileNumber:{
            type:Number,
            required:true
        },
        role:[
            {
                type:String,
                required:true
            }
        ],
        deliveryExecutive:{
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
        },
        cart:{
            restaurantId:String,
            foodList: [
                {
                    foodId: {type: mongoose.Schema.Types.ObjectId, ref: 'foodModel'}, //Ref of User ID
                    quantity: {type:Number}
                }
            ],
        },
        orderDetails:[{
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
            deliveryExecutiveDetails:{
                userId:{
                    type: mongoose.Schema.Types.ObjectId, 
                    ref: 'userModel'
                }
            },
        }]   
    }
)

module.exports = userSchema;