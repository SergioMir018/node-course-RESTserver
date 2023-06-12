const { response } = require("express")


const isAdmin = ( req, res = response, next ) => {

    if ( !req.user ) {
        return res.status( 500 ).json( {
            msg: "The role is being validated without the correct token"
        } );
    }

    const { role, name } = req.user;

    if ( role !== 'ADMIN_ROLE' ) {
        return res.status( 401 ). json( {
            msg: `${name} is unauthorized to do this action`
        } );
    }

    next();
}

const hasRole = ( ...roles ) => {

    if (!req.user) {
		return res.status( 500 ).json({
			msg: "The role is being validated without the correct token",
		});
	}

    if ( !roles.includes( req.user.role ) ) {
        return res.status( 401 ).json( {
            msg: `The service requires one of these roles: ${roles}`
        } );
    }

    return ( req, res = response, next ) => {
        next();
    }
}

module.exports = {
    isAdmin,
    hasRole
}