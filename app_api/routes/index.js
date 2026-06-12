const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

// Trips collection routes
router
    .route('/trips')
    .get(ctrlTrips.tripsList)
    .post(ctrlTrips.tripsAddTrip);

// Single trip routes
router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode)
    .put(ctrlTrips.tripsUpdateTrip)
    .delete(ctrlTrips.tripsDeleteTrip);

module.exports = router;