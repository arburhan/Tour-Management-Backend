const express = require('express');
const router = express.Router();
const tourController = require('../../controllers/tours.controller');

router.route('/')
    .get(tourController.getTours)
    .post(tourController.createTours)

router.route('/:id')
    .get(tourController.getSingleTours)
    .patch(tourController.updateSingleTours)


module.exports = router