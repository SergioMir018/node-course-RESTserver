const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/authController');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/login', [
    check("email", "Not a valid email").isEmail(),
    check("password", "Password required").not().isEmpty(),
    validateFields
], login)

module.exports = router;