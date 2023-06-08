const {Router} = require('express');
const {usersGet, 
    usersPut, 
    usersPost,
    usersDelete, 
    usersPatch} = require('../controllers/users');
const { check } = require('express-validator');

const router = Router();

router.get('/', usersGet);

router.patch('/', usersPatch)

router.put('/:id',usersPut);

router.post('/', [
    check('name', 'The name is necessary').not().isEmpty(),
    check('password', 'The password should be more than 6 characters').isLength({min:6}),
    check('email', 'The email is invalid').isEmail(),
    check('role').custom(value => {
        const validRoles = ['ADMIN_ROLE', 'USER_ROLE'];
        if (!validRoles.includes(value.toUpperCase())) {
            throw new Error('Not a valid role');
        }
        return true;
    }),
], usersPost);

router.delete('/', usersDelete);

module.exports = router;