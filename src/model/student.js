const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Student", studentSchema);
