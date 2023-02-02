const TourDesignSchema = require('../models/Tour.Model');

// get tours
exports.getToursService = async (queries, queryObj) => {
    const total = await TourDesignSchema.countDocuments(queries);
    const pageCount = Math.ceil((total / queries.limit));
    const tours = await TourDesignSchema.find(queryObj)
        .sort(queries.sortBy)
        .select(queries.fields)
        .skip(queries.skip)
        .limit(queries.limit);
    return { tours, total, pageCount };
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