const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const AgentSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  localGovernment: {
    type: String,
    required: true
  },
  nin: {
    type: String,
    required: true
  },
  designations: {
    type: String,
    required: true
  }
});



module.exports = Agent = mongoose.model("agents", AgentSchema);
