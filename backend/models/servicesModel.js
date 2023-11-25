const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
    service_name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    robot: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    total_used:{
        type: Number,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Service", servicesSchema);