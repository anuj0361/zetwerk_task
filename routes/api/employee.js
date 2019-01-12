const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Employee = require("../../models/Employee");
const validateEmployeeInput = require("../../validator/employee");

router.post("/", (req, res) => {
  const { errors, isValid } = validateEmployeeInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const employeeFields = {};
  if (req.body.name) employeeFields.name = req.body.name;
  if (req.body.salary) employeeFields.salary = req.body.salary;
  if (req.body.dob) employeeFields.dob = req.body.dob;

  if (typeof req.body.skills !== "undefined") {
    employeeFields.skills = req.body.skills.split(",");
  }

  Employee.findOne({ name: req.body.name })
    .then(employee => {
      if (employee) {
        errors.name = "Employee already exists";
        res.status(400).json(errors);
      }

      new Employee(employeeFields).save().then(employee => res.json(employee));
    })
    .catch(e => {
      res.status(400).send();
    });
});

router.get("/", (req, res) => {
  const errors = {};

  Employee.find()
    .then(employees => {
      if (!employees) {
        errors.noemployee = "There are no employee";
        return res.status(404).json(errors);
      }

      res.send(employees);
    })
    .catch(err => res.status(404).json({ profiles: "There are no profiles" }));
});

router.delete("/:id", (req, res) => {
  Employee.findOneAndDelete({ employeeId: req.body.id })
    .then(() => {
      res.send({ success: true });
    })
    .catch(e => {
      res.status(400).send();
    });
});

router.post("/update/:id", (req, res) => {
  const { errors, isValid } = validateEmployeeInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const employeeFields = {};
  if (req.body.name) employeeFields.name = req.body.name;
  if (req.body.salary) employeeFields.salary = req.body.salary;
  if (req.body.dob) employeeFields.dob = req.body.dob;

  if (typeof req.body.skills !== "undefined") {
    employeeFields.skills = req.body.skills.split(",");
  }

  Employee.findOneAndUpdate(
    { employeeId: req.body.id },
    { $set: employeeFields },
    { new: true }
  )
    .then(employee => res.json(employee))
    .catch(e => {
      res.status(400).send();
    });
});

module.exports = router;
