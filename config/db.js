const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect("mongodb://localhost:27017/API")

    console.log(`MongoDB connected`.cyan.bold.underline)
}

module.exports = connectDB;