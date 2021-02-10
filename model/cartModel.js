const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userModel',
            required:true
        },
        foodList: [
            {
                foodId: {type: mongoose.Schema.Types.ObjectId, ref: 'foodModel'}, //Ref of User ID
                quantity: {type:Number}
            }
        ],
        restaurantId: {
            type: mongoose.Schema.Types.ObjectId, // full obhject with restaurant detail
            ref: 'restaurantModel',
            required:true
        }

    }
)

module.exports = cartSchema;