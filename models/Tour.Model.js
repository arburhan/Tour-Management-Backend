const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// schema design
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a beautiful plase name for tour :) ."],
        trim: true,
        unique: [true, "Name must be unique"],
        lowercase: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLenght: [100, "Name is too large"],
    },
    imageURL: [{
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                if (!Array.isArray(value)) {
                    return false;
                }
                let isValid = true;
                value.forEach(url => {
                    if (!validator.isURL(url)) {
                        isValid = false;
                    }
                });
                return isValid;
            },
            message: "Please provide valid image urls"
        }
    }],
    description: {
        type: String,
        required: [true, "Please provide place description ."]
    },
    category: {
        type: String,
        required: true,
        enum: {
            values: ["Clasic", "Business", "VIP", "Student"],
            message: `free service value can't be {VALUE}, must be Clasic/Business"VIP/Student category`
        }
    },
    cost: {
        type: Number,
        required: true,
        minLength: [3, "cost must be at least 3 hundred."],
        maxLenght: [10000, "cost is too expensive. eto hole keu jabe na via"],
    },
    free: {
        type: String,
        required: [true, "Please provide atleast a free service name ."],
        enum: {
            values: ["food", "photoshoot", "swiming pool", "T-shirt"],
            message: "free service value can't be {VALUE}, must be food/photoshoot/swimingPool/T-shirt"
        }
    }

}, {
    timestamps: true,
})


/* tourSchema.pre('save', function (next) {

    //this -> 
    console.log(' Before saving data');
    if (this.seat == 0) {
        this.status = 'no seat available for tour :( '
    }

    next()
}) */


const TourDesignSchema = mongoose.model('Tour', tourSchema)

module.exports = TourDesignSchema;