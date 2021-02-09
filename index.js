const mongoose = require('mongoose');
const dotenv = require('dotenv');
const foodSchema = require('./model/food');
const restaurantSchema = require('./model/restaurantModel');
const userSchema = require('./model/userModel');
dotenv.config();
mongoose.connect(
    process.env.CONNECTION_STRING,
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));

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


db.once('open',function(){
    console.log("Connected");
    
    const resDataCollection = mongoose.model('restaurant',restaurantSchema,'restaurant');
    const resObj= new resDataCollection({
        restaurantName:"AA",
        restaurantLocation:{
            address:"Abc",
            city:"Surat",
            zip:111111,
            state:"Gujarat",
            country:"India",
            latitude:12.2342323,
            longitude:123.434
        },
        workingHours:{
            start : 8,
            end : 22
        },
        activityStatus:true,
        restaurantImages:["dhfjsdfkhsjkldfhsdhf","fjdshfjklhsdfjuh"],
        restaurantRatings:[{
            userID:"6022758d0fd97c59cc971c75",
            rating:4
        }],
        userID:"6022758d0fd97c59cc971c75"
    })
    console.log(resObj);
    resObj.save(function(err,res){
        console.log(res);
    })
    
    resDataCollection.find(function(err,res){
        if(err){
            console.error(err);
        }
        console.log(res);
    });
    
})

