const { getToursService, createToursService, getSingleToursService, updateSingleToursService } = require("../services/tour.services");

// get tours
exports.getTours = async (req, res, next) => {
    try {
        const tours = await getToursService();

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