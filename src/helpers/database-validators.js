const e = require("express");
const Role = require("../models/role");
const User = require("../models/user");

const isValidRole = async (role = "") => {
  const ifRole = await Role.findOne({ role });

  if (!ifRole) {
    throw new Error(`${role} is not a valid role`);
  }
};

const validateEmailExistence = async (email = '') => {
	const existEmail = await User.findOne({ email });

	if (existEmail) {
		throw new Error(`${email} already exists`);
	}
};

module.exports = {
	isValidRole,
	validateEmailExistence
};
