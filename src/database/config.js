const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    try {

        await mongoose.connect(process.env.DB_CNN);

        console.log('Database Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error at init database');
    }


}

module.exports = {
    dbConnection
}