const mongoose = require('mongoose');
const dotenv = require('dotenv');
const restaurantSchema = require('./model/restaurantModel');
const userSchema = require('./model/userModel');

dotenv.config();
mongoose.connect(
    process.env.CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));


// First time user registartion

// db.once('open',function(){
//     console.log("Connected");

//     const userDataCollection = mongoose.model('user',userSchema,'users');
//     const userObj= new userDataCollection({
//         firstName:'Chirag 1',
//         lastName:'Patel bhai',
//         email:'chirag@gmail.com',
//         password:'chirag',
//         birthDate:new Date(),
//         gender:'Male',
//         mobileNumber:5621,
//         role:['DE'],
//         deliveryExecutive:{
//             vehicleNumber:"101-101-1111",
//             deliveryExecutiveLocation:{
//                 address:"abc",
//                 city:"Gandhinagar",
//                 zip:382745,
//                 state:"Gujarat",
//                 country:"India",
//                 latitude:13.252564,
//                 longitude:14.25645, 
//             },
//             activityStatus:true,
//             deliveryExecutiveRatings:[]
//         }
//     })
//     let userObj= new userDataCollection({
//         firstName:'Venketesh 1',
//         lastName:'Soma 1',
//         email:'venky@gmail.com',
//         password:'venky',
//         birthDate:new Date(),
//         gender:'Male',
//         mobileNumber:1111,
//         role:['NU'],
//     })

//     console.log("UserObject Data:",userObj);
//     userObj.save(function(err,user){
//         if(err) console.log(err.message);
//         else{
//             console.log("User Data======",user);
//         }
//     })

//     userDataCollection.find(function(err,user){
//         if(err){
//             console.error(err);
//         }
//         console.log(err);
//         console.log(user);
//     });

// })


//First time restaurant adding

// db.once('open', function () {
//     console.log("Connected");

//     const resDataCollection = mongoose.model('restaurant', restaurantSchema, 'restaurants');
//     const resObj = new resDataCollection({
//         restaurantName: "AA",
//         restaurantLocation: {
//             address: "Abc",
//             city: "Surat",
//             zip: 111111,
//             state: "Gujarat",
//             country: "India",
//             latitude: 12.2342323,
//             longitude: 123.434
//         },
//         workingHours: {
//             start: 8,
//             end: 22
//         },
//         activityStatus: true,
//         restaurantImages: ["dhfjsdfkhsjkldfhsdhf", "fjdshfjklhsdfjuh"],
//         restaurantRatings: [{
//             userID: "6022758d0fd97c59cc971c75",
//             rating: 4
//         }],
//         userID: "6024b7e49b56bd74b4abfcf5",
//         menuDetails: [
//             {
//                 foodName: "Food 1",
//                 foodType: "Veg",
//                 foodCategory: [
//                     "pizza",
//                     "burger"
//                 ],
//                 foodDescription: "Food 1 description",
//                 foodImage: "foodimage1.jpg",
//                 foodPrice: 500,
//                 foorRating: [{

//                 }]
//             }
//         ]
//     })
//     resObj.save(function (err, res) {
//         console.log(res);
//     })

//     resDataCollection.find(function (err, res) {
//         if (err) {
//             console.error(err);
//         }
//         console.log(res);
//     });
// })


// db.once('open', async function () {
//     console.log("Connected");
//     const userDataCollection = mongoose.model('user', userSchema, 'users');
//     const id = "60260e1b2222af1cc43a0cc9";
//     // let data = await userDataCollection.findByIdAndUpdate(id,{$set:{"cart.restaurantId":"asdda"}},{$push:{"cart.foodList":{foodId:"aaa",quantity:2}}});
//     var restaurantId = "restaurantId 2";
//     const foodListDoc = {
//         foodId: "foodId 21",
//         quantity: 1
//     }
//     var cart = await userDataCollection.findById({ _id: id }, 'cart');


//     if (cart.cart.restaurantId == restaurantId) {
//         console.log("Restaurant Id is same");
//         if (cart.cart.foodList.some(food => food.foodId == foodListDoc.foodId)) {
//             console.log("Food Id is match");
//             var foodList = cart.cart.foodList;
//             for (var i in foodList) {
//                 if (foodList[i].foodId == foodListDoc.foodId) {
//                     foodList[i].quantity += 1;
//                 }
//             }
//             userDataCollection.findOneAndUpdate(
//                 { _id: id },
//                 {
//                     $set: { "cart.foodList": foodList },
//                 },
//                 function (err, data) {
//                     console.log("Updated the foodList data", data);
//                 });
//         } else {
//             console.log("Food Id is not match");
//             userDataCollection.findOneAndUpdate(
//                 { _id: id },
//                 {
//                     $push: { "cart.foodList": foodListDoc },
//                 },
//                 function (err, data) {
//                     console.log("Added new food id", data);
//                     // console.log("Here is err", err);
//                 });
//         }
//     } else {
//         console.log("Restaurant Id is not same")
//         userDataCollection.findOneAndUpdate(
//             { _id: id },
//             {
//                 $set: { "cart.restaurantId": restaurantId,"cart.foodList": foodListDoc },
//             },
//             function (err, data) {
//                 console.log("Added first time", data);
                
//             });
//     }
    
// })



// db.once('open',async function(){
//     console.log("Connected");

//     const cartDataCollection = mongoose.model('cart',cartSchema,'cart');
//     const cartObj= new cartDataCollection({
//        userId:"6022758d0fd97c59cc971c75",
//        foodList:[
//           {
//               foodId:"6023c71cbb28355f9867fae1",
//               quantity:1
//           }
//        ],
//        restaurantId:"602281dc7819cf63f42ca39b"
//     })
//     console.log(cartObj);
//     cartObj.save(function(err,res){
//         console.log(res);
//     })

//     let data=await cartDataCollection.find();
//     console.log("Here is data",data);
// })

// db.once('open', function () {
//     console.log("Connected");

//     const cartDataCollection = mongoose.model('cart', cartSchema, 'cart');
//     const cartUser = cartDataCollection.find(function (err, res) {
//         if (err) {
//             console.error(err);
//             // return null;
//         }
//         // console.log("Hello");
//         return res;
//     });

//     console.log(cartUser);

//     const orderDataCollection = mongoose.model('order', orderSchema, 'orders');

//     const orderObj = new orderDataCollection({

//     })
//     console.log(orderObj);
//     orderObj.save(function (err, res) {
//         console.log(res);
//     })

//     orderDataCollection.find(function (err, res) {
//         if (err) {
//             console.error(err);
//         }
//         console.log(res);
//     });
// })
