const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const passport = require("passport");
const bcrypt = require("bcryptjs");


// Load Input Validation
const validateAgentInput = require("../../validation/agent");

// Load User model
const Agent = require("../../models/Agent");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/agent", (req, res) => {
  const { errors, isValid } = validateAgentInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Agent.findOne({ email: req.body.email, phoneNumber: req.body.phoneNumber, nin: req.body.nin  }).then(agent => {
    if (agent) {
      errors.email = "Email already exists";
      errors.phoneNumber = "Mobile number already exists";
      errors.nin = "NIN already exists";
      return res.status(400).json(errors);
    } else {

      const newAgent = new Agent({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        state: req.body.state,
        city: req.body.city,
        localGovernment: req.body.localGovernment,
        nin: req.body.nin,
        designations: req.body.designations
      });

               newAgent
            .save()
            .then(user => res.json(agent))
            .catch(err => console.log(err));

      // bcrypt.genSalt(10, (err, salt) => {
      //   bcrypt.hash(newUser.password, salt, (err, hash) => {
      //     if (err) throw err;
      //     newUser.password = hash;
      //     newUser
      //       .save()
      //       .then(user => res.json(user))
      //       .catch(err => console.log(err));
      //   });
      // });
    }
  });
});



module.exports = router;
