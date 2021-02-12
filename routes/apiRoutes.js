const express = require("express");
const router = express.Router();

const RestaurantModel = require("../model/restaurantModel");
const UserModel = require("../model/userModel");

// to add restuarant
router.post("/add-restuarant", async (request, response) => {
  console.log("In add Restuarant Post!");

  const restuarant = await new RestaurantModel({
    restaurantName: request.body.restaurantName,
    restaurantLocation: request.body.restaurantLocation,
    workingHours: request.body.workingHours,
    activityStatus: request.body.activityStatus,
    restaurantImages: request.body.restaurantImages,
    restaurantRatings: request.body.restaurantRatings,
    userId: request.body.userId,
    menuDetails: request.body.menuDetails,
  });

  restuarant.save();
  try {
    response.json(restuarant);
  } catch (error) {
    response.send(error);
  }
});


// to add user
router.post("/user", (request, response) => {
  console.log("In User Post!");

  const user = new UserModel({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
    birthDate: request.body.birthDate,
    gender: request.body.gender,
    mobileNumber: request.body.mobileNumber,
    role: request.body.role,
    deliveryExecutive: request.body.deliveryExecutive,
    // cart: request.body.cart,
    orderDetails: request.body.orderDetails,
    // foodIds:request.body.foodIds,
    restaurantDetails: request.body.restaurantDetails,
    deliveryExecutiveDetails: request.body.deliveryExecutiveDetails,
    cart: request.body.cart,
    orderDetails: request.body.orderDetails,
  });

  user
    .save()
    .then((user) => {
      response.send(user).status(200);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

// gets all Restuarants
router.get('/get-restuarants' ,async (request,response) => {
    console.log("In get Request");

    RestaurantModel.find()
    .then((getResturants) => {
      response.send(getResturants);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
    
})

// get restuarants by id
router.get("/get-restuarantsById/:id", (request, response) => {
    console.log("In get Request by id");
    const id = request.params.id;
  
    RestaurantModel.findById(id)
      .then((getResturants) => {
        response.send(getResturants);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  })

// get user by id
router.get("/user/:id",(request,response) => {
    console.log("In user get");

    const id = request.params.id;

    UserModel.findById(id).then((getUser) => {
        response.send(getUser)
    }).catch((error) => {
        console.log("Error:",error);
    })
})

// cart details
// router.post('/cart',(request,response) => {
//   console.log("In cart:");

//   const id = "60260e1b2222af1cc43a0cc9";
//   // let data = await userDataCollection.findByIdAndUpdate(id,{$set:{"cart.restaurantId":"asdda"}},{$push:{"cart.foodList":{foodId:"aaa",quantity:2}}});
//   var restaurantId = "restaurantId 2";
//   const foodListDoc = {
//       foodId: "foodId 21",
//       quantity: 1
//   }
//   var cart = await userDataCollection.findById({ _id: id }, 'cart');

//   if (cart.cart.restaurantId == restaurantId) {
//       console.log("Restaurant Id is same");
//       if (cart.cart.foodList.some(food => food.foodId == foodListDoc.foodId)) {
//           console.log("Food Id is match");
//           var foodList = cart.cart.foodList;
//           for (var i in foodList) {
//               if (foodList[i].foodId == foodListDoc.foodId) {
//                   foodList[i].quantity += 1;
//               }
//           }
//           userDataCollection.findOneAndUpdate(
//               { _id: id },
//               {
//                   $set: { "cart.foodList": foodList },
//               },
//               function (err, data) {
//                   console.log("Updated the foodList data", data);
//               });
//       } else {
//           console.log("Food Id is not match");
//           userDataCollection.findOneAndUpdate(
//               { _id: id },
//               {
//                   $push: { "cart.foodList": foodListDoc },
//               },
//               function (err, data) {
//                   console.log("Added new food id", data);
//                   // console.log("Here is err", err);
//               });
//       }
//   } else {
//       console.log("Restaurant Id is not same")
//       userDataCollection.findOneAndUpdate(
//           { _id: id },
//           {
//               $set: { "cart.restaurantId": restaurantId,"cart.foodList": foodListDoc },
//           },
//           function (err, data) {
//               console.log("Added first time", data);
              
//           });
//   }
  

//   const cart = new UserModel({
      
//   })
// })

module.exports = router;
