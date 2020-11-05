const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateAgentInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.localGovernment = !isEmpty(data.localGovernment) ? data.localGovernment : "";
  data.nin = !isEmpty(data.nin) ? data.nin : "";
  data.designations = !isEmpty(data.designations) ? data.designations : "";


  if (!Validator.isLength(data.firstName, { min: 2 })) {
    errors.firstName = "First name must be 2 letter above";
  }

 
  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = "Last name must be 2 letter above";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Mobile number is required";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State field is required";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }
  if (Validator.isEmpty(data.localGovernment)) {
    errors.localGovernment = "Local Government field is required";
  }

  if (Validator.isEmpty(data.nin)) {
    errors.nin = "NIN field is required";
  }

  if (Validator.isEmpty(data.designations)) {
    errors.designations = "Designations fill in required";
  }




  return {
    errors,
    isValid: isEmpty(errors)
  };
};
