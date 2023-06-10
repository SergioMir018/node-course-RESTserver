const {response} = require('express');

const User = require('../models/user');
const { encryptPassword } = require("../helpers/password-encrypt");


const usersGet = async(req, res = response) => {
    const { limit = 5, from = 0 } = req.query;
    const queryState = { state: true };

    if (isNaN(limit)) {
		return res.status(400).json({
			msg: `The limit value is not a valid number`,
		});
	}

	if (isNaN(from)) {
		return res.status(400).json({
			msg: `The from value is not a valid number`,
		});
	}

    const resp = await Promise.all([
			User.countDocuments(queryState),
			User.find(queryState).skip(from).limit(limit),
		]);

    res.json({
        resp
    });
}

const usersPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if(password) {
        rest.password = encryptPassword(password);
    }

    const user = await User.findByIdAndUpdate(id, rest);

    res.json(user);
}

const usersPost =async(req, res = response) => {

    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});

    //Encrypt the password
    user.password = encryptPassword(password);
    
    //Save in the database
    await user.save();

    res.json(user);
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