const { Router } = require('express');

const { usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch } = require('../controllers/users');

const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isValidRole, validateEmailExistence } = require('../helpers/database-validators')

const router = Router();

router.get('/', usersGet);

router.patch('/', usersPatch)

router.put('/:id', usersPut);

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

router.delete('/', usersDelete);

module.exports = router;