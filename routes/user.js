const Joi = require ("joi");
const express = require("express");
const Users = require("../model/user");
const router = express.Router()
const { model } = require("mongoose");

// Create name
router.post("/api", async (req, res) => {
  // Joi validation
 const Schema = Joi.object({
    name: Joi.string().min(3).required()
 });

 const { error } = Schema.validate(req.body)
 if(error) return res.status(400).send({
     responseCode: "96",
     responseMessage: error.details[0].message.replaceAll("\"", ""),
     data: null
 });
  
//  Destructuring 
 const {name} = req.body

 try {
  // Checking if name exist in the database
    let user =  await Users.findOne({name})
    if(user) return res.status(400).send({
        responseCode: "96",
        responseMessage: "Name already exists",
        data: null
    })

    // Creating new user
    user = new Users({
        name
    })

    // saving users to the DB if
    await user.save()
    res.status(200).send({
        responseCode: "00",
        responseMessage: "name created successful",
        data: user
    })
 } catch (error) {
    res.status(500).send({
        responseCode: "95",
        responseMessage:"internal server error"?.replaceAll("\"", ""),
        data: null
    });
    console.log(error)
}
});

// To get Users
router.get("/api/:_id", async (req,res) => {
try {

    const user = await Users.findById({_id: req.params._id})
    if(!user) return res.status(400).send({
        responseCode: "96",
        responseMessage: "no user could be featched ",
        data: null
    });

    res.status(200).send({
        responseCode: "00",
        responseMessage: "users fetched successfully",
        data: user 
    });
} catch (error) {
    res.status(500).send({
        responseCode: "95",
        responseMessage:"internal server error"?.replaceAll("\"", ""),
        data: null
    });
    console.log(error)
}
});

// To update a user
router.put("/api/:_id", async (req,res) =>{

  // To update the name 
    const name = req.body;

    try {
      // finding the user by Id
      let user = await Users.findByIdAndUpdate( { _id: req.params._id}, { $set: name }, { new: true });
        if (!user) 
          return res.status(404).send({
            responseCode:"95",
            responseMessage: "user not found",
            data: null
          });
        
          // saving the user to the database
        await user.save()
        res.status(200).send({
          responseCode: "00",
          responseMessage: "User updated successfully",
          data: user
        })
    } catch (error) {
        res.status(500).send({
          responseCode: "95",
          responseMessage: "internal server error",
          data: null,
        });
        console.log(error);
      }
    });

// To delete a user
 router.delete("/api/:_id", async (req, res) => {
    try {
      // To find a user by Id
      const user = await Users.findByIdAndDelete({ _id: req.params._id});
      if (!user) 
        return res.status(400).send({
          responseCode: "96",
          responseMessage: "No user found",
          data: null,
        });
        
        // Return a good response
      res.status(200).send({
          responseCode: "00",
          responseMessage: "User deleted successfully",
          data: null
      })
    } catch (error) {
      res.status(500).send({
        responseCode: "95",
        responseMessage: "internal server error",
        data: null,
      });
      console.log(error);
    }
  });


module.exports = router     