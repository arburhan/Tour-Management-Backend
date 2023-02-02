const TourDesignSchema = require('../models/Tour.Model');

// get tours
exports.getToursService = async () => {
    const tours = await TourDesignSchema.find({})
    return tours;
}
// create tours
exports.createToursService = async (data) => {
    const tours = await TourDesignSchema.create(data);
    return tours;
}