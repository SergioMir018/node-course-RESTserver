const Role = require("../models/role");

const isValidRole = async (role = "") => {
  const ifRole = await Role.findOne({ role });

  if (!ifRole) {
    throw new Error(`${role} is not a valid role`);
  }
};

module.exports = {
  isValidRole,
};
