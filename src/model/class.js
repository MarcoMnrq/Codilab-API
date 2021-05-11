const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
});

module.exports = mongoose.model("Class", classSchema);