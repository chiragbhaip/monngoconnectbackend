const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        orderLocation: {
            address: { type: String },
            city: { type: String },
            zip: { type: Number },
            state: { type: String },
            country: { type: String },
            latitude: { type: Number },
            longitude: { type: Number },
        },
        totalAmount: {
            type: Number,
            required: true
        }, 
        orderStatus:
        {
            ordered: {
                type: Boolean,
                required: true
            },
            accepted: {
                type: Boolean,
                required: true
            },
            cooking: {
                type: Boolean,
                required: true
            },
            outOfDelivery: {
                type: Boolean,
                required: true
            },
            delivered: {
                type: Boolean,
                required: true
            },
            cancelled: {
                type: Boolean,
                required: true
            }
        },
        orderDateAndTime: {
            type: Date,
            required: true
        },
        foodList: [
            {
                foodId:{
                    type:String,
                    required:true
                }, 
                foodName: {
                    type: String,
                    required: true,
                },
                foodType: {
                    type: String,
                    required: true
                },
                foodCategory: [{
                    type: String
                }],
                foodDescription: {
                    type: String,
                    required :true
                },
                foodImage: {
                    type: String, //Buffer later 
                    required: true
                },
                foodPrice: {
                    type: Number,
                    required: true
                },
            }
        ],
        restaurantDetails: {
            restaurantId:{
                type:String,
                required:true
            },
            restaurantName: {
                type: String,
                required: true
            },
            restaurantLocation: {
                address: { type: String },
                city: { type: String },
                zip: { type: Number },
                state: { type: String },
                country: { type: String },
                latitude: { type: Number },
                longitude: { type: Number },
            },
        },
        deliveryExecutiveDetails: {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'userModel'
            }
        },
    }
)

module.exports = orderSchema;