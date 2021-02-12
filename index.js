const express = require('express');
const app = express();

const appRoutes = require('./routes/apiRoutes')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const foodSchema = require('./model/foodModel');
// const restaurantSchema = require('./model/restaurantModel');
// const userSchema = require('./model/userModel');
// const orderSchema = require('./model/orderModel');
// const cartSchema = require('./model/cartModel');
dotenv.config();


app.use(express.json()) 
app.use('/',appRoutes)


app.listen(5000,() => {
    console.log("Server listening to the port 5000");
})


mongoose.connect( process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if(err) return console.log(err.message)
    console.log("Database Connected!");
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

// db.once('open',function(){
//     console.log("Connected");

//     const userDataCollection = mongoose.model('users',userSchema,'users');
//     const userObj= new userDataCollection({
//         firstName:'Chirag',
//         lastName:'Patel',
//         email:'chirag@gmail.com',
//         password:'chirag',
//         birthDate:new Date(),
//         gender:'Male',
//         mobileNumber:5621,
//         role:['DE']
//     })
//     console.log(userObj);
//     userObj.save(function(err,user){
//         console.log(user);
//     })

//     userDataCollection.find(function(err,user){
//         if(err){
//             console.error(err);
//         }
//         console.log(user);
//     });

// })


// db.once('open',function(){
//     console.log("Connected");

//     const resDataCollection = mongoose.model('restaurant',restaurantSchema,'restaurant');
//     const resObj= new resDataCollection({
//         restaurantName:"AA",
//         restaurantLocation:{
//             address:"Abc",
//             city:"Surat",
//             zip:111111,
//             state:"Gujarat",
//             country:"India",
//             latitude:12.2342323,
//             longitude:123.434
//         },
//         workingHours:{
//             start : 8,
//             end : 22
//         },
//         activityStatus:true,
//         restaurantImages:["dhfjsdfkhsjkldfhsdhf","fjdshfjklhsdfjuh"],
//         restaurantRatings:[{
//             userID:"6022758d0fd97c59cc971c75",
//             rating:4
//         }],
//         userID:"6022758d0fd97c59cc971c75"
//     })
//     console.log(resObj);
//     resObj.save(function(err,res){
//         console.log(res);
//     })

//     resDataCollection.find(function(err,res){
//         if(err){
//             console.error(err);
//         }
//         console.log(res);
//     });



// })

// db.once('open',function(){
//     console.log("Connected");

//     const foodDataCollection = mongoose.model('food',foodSchema,'foods');
//     const foodObj= new foodDataCollection({
//         foodName:"Food 1",
//         foodType:"Veg",
//         foodCategory:[
//             "pizza",
//             "burger"
//         ],
//         foodDescription:"Food 1 description",
//         foodImage:"foodimage1.jpg",
//         foodPrice:500,
//         foorRating:[{

//         }],
//         restaurantId:"602281dc7819cf63f42ca39b"

//     })
//     console.log(foodObj);
//     foodObj.save(function(err,res){
//         console.log(res);
//     })

//     foodDataCollection.find(function(err,res){
//         if(err){
//             console.error(err);
//         }
//         console.log(res);
//     });
// })

// db.once('open',async function(){
//     console.log("Connected");

//     const cartDataCollection = mongoose.model('cart',cartSchema,'cart');
//     // const cartObj= new cartDataCollection({
//     //    userId:"6022758d0fd97c59cc971c75",
//     //    foodList:[
//     //       {
//     //           foodId:"6023c71cbb28355f9867fae1",
//     //           quantity:1
//     //       }
//     //    ],
//     //    restaurantId:"602281dc7819cf63f42ca39b"
//     // })
//     // console.log(cartObj);
//     // cartObj.save(function(err,res){
//     //     console.log(res);
//     // })

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
