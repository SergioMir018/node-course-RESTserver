const {response} = require('express');
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

    await user.save();

    res.json({
        msg: 'post API - controller',
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