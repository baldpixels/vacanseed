const express = require('express')
const Lot = require('../models/lot.model')

// Controller for adding a new Lot
exports.add = async (req, res) => {
  const lotAddress = {
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    country: req.body.country
  }
  const lot = new Lot({
    vacant: true,
    size: req.body.size,
    address: lotAddress,
    description: req.body.description
  })
  try {
      const newLot = await lot.save()
      // res.redirect(`lots/${newLot.id}`)
      res.redirect(`/lots`)
  } catch (err) {
    res.render('lots/add', {
      lot: lot,
      errorMessage: 'There was an error adding this lot to our database: ' + err
    })
  }
}

// Controller for editing a Lot
exports.edit = async (req, res) => {
  try {
    const lots = await Lot.findById(req.params.id)
  } catch (err) {
    res.redirect('/')
  }
}

// Controller for deleting a Lot
exports.delete = async (req, res) => {
  try {
    const lots = await Lot.findByIdAndRemove(req.params.id)
    console.log('Deleted Lot with ID ', req.params.id)
    res.redirect('/lots')
  } catch (err) {
    res.redirect('/')
  }
}

// Controller for searching all lots
exports.search = async (req, res) => {
  try {
    res.render('lots/search')
  } catch (err) {
    res.redirect('/')
  }
}

// Controller for viewing Lots
exports.view = async (req, res) => {
  try {
    lots = await Lot.find({})
    res.render('lots', {
      lots: lots
    })
  } catch (err) {
    res.redirect('/')
  }
}
