const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const validateJWT = async(req = request, res = response, next) => {

    const token =  req.header('auth-token');

    if ( !token ) {
        return res.status( 401 ).json({
            msg: 'No token in the petition'
        });
    }

    try {
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        req.user = await User.findById( uid );

        if( !req.user ) {
            return res.status(401).json({
                msg: "The user doesn't exists"
            });
        }

        if ( !request.user.state ) {
            return res.status( 401 ).json( {
                msg: "Not a valid token"
            } );
        }

        next();
    
    } catch (error) {
        console.log(error);

        res.status( 401 ).json( {
            msg: 'Not a valid token'
        } );
    }
}


module.exports = {
    validateJWT
}