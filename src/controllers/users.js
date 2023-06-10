const {response} = require('express');

const User = require('../models/user');
const { encryptPassword } = require("../helpers/password-encrypt");


const usersGet = (req, res = response) => {
    const {q, name, apikey} = req.query

    res.json({
        msg: 'get API - controller',
        q,
        name,
        apikey
    });
}

const usersPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if(password) {
        rest.password = encryptPassword(password);
    }

    const user = await User.findByIdAndUpdate(id, rest);

    res.json({
        user
    });
}

const usersPost =async(req, res = response) => {

    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});

    //Encrypt the password
    user.password = encryptPassword(password);
    
    //Save in the database
    await user.save();

    res.json({
        user
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}