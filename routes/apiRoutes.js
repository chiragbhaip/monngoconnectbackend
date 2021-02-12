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
    cart: request.body.cart,
    orderDetails: request.body.orderDetails,
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

module.exports = router;
