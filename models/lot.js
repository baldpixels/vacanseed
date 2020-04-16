const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  }
})

const lotSchema = new mongoose.Schema({
  vacant: {
    type: Boolean,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Lot', lotSchema)
