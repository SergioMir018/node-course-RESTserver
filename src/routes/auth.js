const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/authController');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/login', [
    check("email", "Not a valid email").isEmail(),
    check("password", "Not a valid password. Min 6 characters").isLength({ min: 6 }),
    validateFields
], login)

module.exports = router;