const jwt = require('jsonwebtoken');

const generateJWT = ( uid = '' ) => {

    return new Promise( (resolve, reject ) => {
        
        const payload = { uid };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, ( error, token ) => {
            if( error ) {
                console.log(error);
                reject( "Couldn't generate the jwt" );
            } else {
                resolve( token );
            }
        } );
    });

}

module.exports = {
    generateJWT
};