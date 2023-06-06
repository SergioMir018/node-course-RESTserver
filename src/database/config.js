const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {
    try {

        await mongoose.connect('mongodb+srv://SergioMir:mSUSaXu1P7keh4OZ@cluster0.bdovo4t.mongodb.net/NodeCourseDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify:false
        });

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error at init database');
    }


}

module.exports = {
    dbConnection
}