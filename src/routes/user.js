const {Router} = require('express');
const {usersGet, 
    usersPut, 
    usersPost,
    usersDelete, 
    usersPatch} = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.patch('/', usersPatch)

router.put('/:id',usersPut);

router.post('/', usersPost);

router.delete('/', usersDelete);

module.exports = router;