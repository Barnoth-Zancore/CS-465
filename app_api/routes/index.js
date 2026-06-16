const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const ctrlTrips = require('../controllers/trips');
const authController = require('../controllers/authentication');

function authenticateJWT(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    const headers = authHeader.split(' ');

    if (headers.length < 2) {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(401);
    }

    const token = headers[1];

    if (token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            console.log('Token validation error:', err.message);
            return res.sendStatus(401);
        }

        req.auth = verified;
        next();
    });
}

// Authentication routes
router
    .route('/register')
    .post(authController.register);

router
    .route('/login')
    .post(authController.login);

// Trips collection routes
router
    .route('/trips')
    .get(ctrlTrips.tripsList)
    .post(authenticateJWT, ctrlTrips.tripsAddTrip);

// Single trip routes
router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode)
    .put(authenticateJWT, ctrlTrips.tripsUpdateTrip)
    .delete(authenticateJWT, ctrlTrips.tripsDeleteTrip);

module.exports = router;