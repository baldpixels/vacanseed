const mongoose = require('mongoose')

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
  },
  description: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Lot', lotSchema)
