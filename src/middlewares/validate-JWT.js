const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next) => {

    const token =  req.header('auth-token');

    if ( !token ) {
        return res.status( 401 ).json({
            msg: 'No token in the petition'
        });
    }

    try {
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        req.uid = uid;

        next();
    
    } catch (error) {
        console.log(error);

        res.status( 401 ).json( {
            msg: 'Not a valid token'
        } );
    }

    next();
}


module.exports = {
    validateJWT
}