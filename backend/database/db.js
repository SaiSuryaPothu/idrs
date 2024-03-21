const mongoose = require("mongoose");

const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to database!");
        
    } catch (error) {
        console.log(`Error in connecting to database ${error}`)
    }
   
}
module.exports = connectdb;