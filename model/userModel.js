const mongoose = require('mongoose');
const deliveryExecutiveSchema = require('./deliveryExecutiveModel');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        birthDate: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true
        },

        mobileNumber: {
            type: Number,
            required: true
        },
        role:
        {
            type: String,
            required: true
        },
        deliveryExecutive: {
            type: deliveryExecutiveSchema
        },
        cart: {
            _id:false,
            restaurantId: {
                type: String,
                required: true
            },
            foodList: [{
                _id:false,
                foodId: {
                    type: mongoose.Types.ObjectId,
                    ref:'restaurant.menuDetails',
                    requied: true   //
                }, //Ref of User ID
                quantity: {
                    type: Number,
                    required: true  //
                },
                required: true
            }],
        }
    }
)

module.exports = userSchema;