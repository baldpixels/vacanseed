const express = require('express')
const router = express.Router()
const Lot = require('../models/lot')

// All Lots Route
router.get('/', async (req, res) => {
  let searchOptions = {}
  if(req.query.zipcode != null && req.query.zipcode != "") {
    searchOptions.zipcode = req.query.zipcode;
  }
  try {
    const lots = await Lot.find({})
    res.render('lots/index', {
      lots: lots,
      searchOptions: req.query
    })
  } catch (err) {
    res.redirect('/')
  }
})

// New Lot Route
router.get('/new', (req, res) => {
  res.render('lots/new', { lot: new Lot() })
})

// Create Lot Route
router.post('/', async (req, res) => {
  const lot = new Lot({
    vacant: req.body.vacant,
    size: req.body.size,
    address: req.body.address
  })
  try {
      const newLot = await lot.save()
      // res.redirect(`lots/${newLot.id}`)
      res.redirect(`lots`)
  } catch (err) {
    res.render('lots/new', {
      lot: lot,
      errorMessage: 'There was an error adding this lot to our database: ' + err
    })
  }
})

module.exports = router
