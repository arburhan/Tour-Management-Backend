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

// get tours
exports.getSingleToursService = async (id) => {
    const tours = await TourDesignSchema.find({ _id: id })
    return tours;
}

// get tours
exports.updateSingleToursService = async (id, data) => {
    const tours = await TourDesignSchema.updateOne({ _id: id }, { $set: data }, {
        runValidators: true
    });

    return tours;
}