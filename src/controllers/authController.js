const { response } = require('express');
const bcryptjs = require('bcryptjs');

const  User  = require('../models/user');
const { generateJWT } = require('../helpers/generateJWT');

const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        //Check if the email exist
        const user = await User.findOne( { email } );

        if(!user) {
            return res.status( 400 ).json({
                msg: "The user/password are not correct"
            });
        }


        //Check if the user is still active
        if (!user.state) {
			return res.status( 400 ).json({
				msg: "The user/password are not correct",
			});
		}

        //Check the password
        const validPassword = bcryptjs.compareSync( password, user.password );

        if(!validPassword) {
            return res.status(400).json({
				msg: "The user/password are not correct",
			});
        }

        //Generate theJWT
        const token = await generateJWT( user.id );


        res.json({
				user,
                token
			});

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Something went wrong"
        });
    }
}

module.exports = {
    login
}