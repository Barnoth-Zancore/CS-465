const apiOptions = {
    server: 'http://localhost:3000'
};

const renderTravelList = (req, res, trips) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        trips
    });
};

const travel = async (req, res) => {
    try {
        const response = await fetch(`${apiOptions.server}/api/trips`);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const trips = await response.json();
        renderTravelList(req, res, trips);
    } catch (err) {
        console.error('Error retrieving trips from API:', err);

        res.render('travel', {
            title: 'Travlr Getaways',
            trips: [],
            message: 'Unable to retrieve trips at this time.'
        });
    }
};

module.exports = {
    travel
};