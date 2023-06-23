const express = require('express');
const tourController = require('../controller/toursController')
const router = express.Router()

router.route('/')
    .get(tourController.getAllTours)

router.route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

router.route('/create')
    .post(tourController.createTour)

module.exports = router;