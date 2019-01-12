const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEmployeeInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.salary = !isEmpty(data.salary) ? data.salary : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "Name needs to between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Employee name is required";
  }

  if (Validator.isEmpty(data.salary)) {
    errors.salary = "Salary field is required";
  }

  if (Validator.isEmpty(data.dob)) {
    errors.dob = "Date of Birth field is required";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
