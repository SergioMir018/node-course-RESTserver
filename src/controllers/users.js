const {response} = require('express');

const bcryptjs = require('bcryptjs');

const User = require('../models/user');


const usersGet = (req, res = response) => {
    const {q, name, apikey} = req.query

    res.json({
        msg: 'get API - controller',
        q,
        name,
        apikey
    });
}

const usersPut = (req, res = response) => {
    const {id} = req.params;

    res.json({
        msg: 'put API - controller',
        id
    });
}

const usersPost =async(req, res = response) => {

    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});

    //Encrypt the password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    
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