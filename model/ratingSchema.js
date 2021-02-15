const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    _id:false,
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user',required:true }, //Ref of User ID
    rating: { type: Number ,required:true}
}
);
module.exports = ratingSchema;