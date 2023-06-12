const { Router } = require('express');
const { check } = require('express-validator');

const { 
	usersGet,
  	usersPut,
  	usersPost,
  	usersDelete,
  	usersPatch 
} = require('../controllers/usersController');

const {
	isValidRole,
	validateEmailExistence,
	validateIdExistence,
} = require("../helpers/database-validators");

const { validateJWT } = require('../middlewares/validate-JWT');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/', usersGet);

router.patch('/', usersPatch)

router.put(
	"/:id",
	[
		check("id", "Not a valid id").isMongoId().custom(validateIdExistence),
		check("role").custom(isValidRole),
		validateFields,
	],
	usersPut
);

router.post(
	"/",
	[
		check("name", "The name is necessary").not().isEmpty(),
		check("password", "The password should be more than 6 characters").isLength(
			{ min: 6 }
		),
		check("email", "The email is invalid")
			.isEmail()
			.custom(validateEmailExistence),
		check("role").custom(isValidRole),
		validateFields,
	],
	usersPost
);

router.delete(
	"/:id",
	[
		validateJWT,
		check("id", "Not a valid id").isMongoId().custom(validateIdExistence),
		validateFields
	],
	usersDelete
);

module.exports = router;