const { getToursService, createToursService, getSingleToursService, updateSingleToursService } = require("../services/tour.services");

// get tours
exports.getTours = async (req, res, next) => {
    try {
        // query
        let queryObj = { ...req.query };
        let queries = {};
        const excludeFields = ['sort', 'page', 'limit'];
        excludeFields.forEach(field => delete queryObj[field]);
        // sort
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;
        }
        // fields
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;
        }
        // pagination
        if (req.query.page) {
            const { page = 1, limit = 3 } = req.query;
            const skip = (page - 1) * limit;
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }
        // query
        let filterString = JSON.stringify(queryObj);
        filterString = filterString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
        queryObj = JSON.parse(filterString);
        console.log(queryObj);
        const tours = await getToursService(queries, queryObj);

        res.status(200).json({
            status: "success",
            data: tours,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });

    }
};

// create tours
exports.createTours = async (req, res, next) => {
    try {
        const tours = await createToursService(req.body);

        res.status(200).json({
            status: "success",
            data: tours,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't add the data",
            error: error.message,
        });

    }
};

// get single tours
exports.getSingleTours = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tours = await getSingleToursService(id);
        res.status(200).json({
            status: "success",
            data: tours,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data with this id",
            error: error.message,
        });

    }
};
// update single tours
exports.updateSingleTours = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tours = await updateSingleToursService(id, req.body);
        res.status(200).json({
            status: "success",
            data: tours,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data with this id",
            error: error.message,
        });

    }
};