
const express = require('express')
const HallController = require('../controller/hallController.js');
const router = express.Router()

router.get('/rooms/all',HallController.getAllRooms)
router.post('/rooms/create',HallController.createRoom)
router.post('/createbooking/:id',HallController.bookingRoom)
router.get('/viewbooking',HallController.getAllBookedRooms)
router.get('/customers',HallController.getAllCustomers)
router.get('/customer/:name',HallController.getBookingCountByCustomer)


module.exports = router
