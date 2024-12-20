const mongoose = require('mongoose');
require('dotenv').config();  // This loads variables from .env file

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI;  // Get the MongoDB URI from the environment
        if (!dbURI) {
            throw new Error('MONGO_URI is not defined in the .env file.');
        }

        await mongoose.connect(dbURI); // Remove deprecated options

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
