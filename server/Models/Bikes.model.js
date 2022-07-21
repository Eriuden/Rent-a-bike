const mongoose = require("mongoose");

const BikeSchema = new mongoose.Schema({
  picture: {
    type: String,
  },
  modelName: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },

  kilometers: {
    type: Number,
    required: true,
  },

  rentPrice: {
    type: Number,
    required: true,
  },
});

const BikeModel = mongoose.model("Bikes", BikeSchema);
module.exports = BikeModel;