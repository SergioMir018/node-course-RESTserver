
const validateJWT = require("../middlewares/validate-JWT");
const validateFields = require("../middlewares/validate-fields");
const validateRole = require("../middlewares/validate-role");

module.exports = {
    ...validateJWT,
    ...validateFields,
    ...validateRole
};