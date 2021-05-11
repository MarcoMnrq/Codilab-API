const mongoose = require("mongoose");

const database = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb://" +
                process.env.DATABASE_HOST +
                ":" +
                process.env.DATABASE_PORT +
                "/" +
                process.env.DATABASE_NAME,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false, // what is this???
            }
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = database;
