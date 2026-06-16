const fs = require('fs');
const path = require('path');
const mongoose = require('./db');

const Trip = mongoose.model('trips');

const tripsPath = path.join(__dirname, '../../data/trips.json');
const trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        await Trip.insertMany(trips);
        console.log('Database seeded successfully.');
        console.log(`${trips.length} trips inserted.`);
    } catch (err) {
        console.error('Database seed failed:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();