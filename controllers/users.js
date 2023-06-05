const {response} = require('express');


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

const usersPost = (req, res = response) => {
    const {name, age} = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        nombre: name,
        edad: age
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