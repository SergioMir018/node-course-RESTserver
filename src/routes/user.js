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
    check('email', 'The email is invalid').isEmail(),
], usersPost);

router.delete('/', usersDelete);

module.exports = router;