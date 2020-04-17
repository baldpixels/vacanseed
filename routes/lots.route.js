const express = require('express')
const router = express.Router()

const lot_controller = require('../controllers/lot.controller')
const Lot = require('../models/lot.model')

// Route for viewing all Lots
router.get('/', lot_controller.view)

// Route for viewing individual Lots
// router.get('/:id', lot_controller.view)

// Routes for adding a new Lot
router.get('/add', (req, res) => {
  res.render('lots/add')
})
router.post('/add', lot_controller.add)

// Routes for editing a Lot
router.get('/:id/edit', (req, res) => {
  res.render('lots/edit')
})
router.post('/:id/edit', lot_controller.edit)

// Route for deleting a Lot
router.post('/:id/delete', lot_controller.delete)

// Route for searching all Lots
router.get('/search', lot_controller.search)

// Export router
module.exports = router
