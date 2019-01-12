const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  }
});

EmployeeSchema.plugin(AutoIncrement, { inc_field: "id" });
module.exports = Employee = mongoose.model("employee", EmployeeSchema);
