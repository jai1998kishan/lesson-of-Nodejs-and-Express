import mongoose from "mongoose";

//defining Schema

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => {
      v >= 5500.5;
    },
  },
  hobbies: { type: Array },
  isactive: { type: Boolean },
  comment: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});


// console.log(studentSchema.path('age'));


//Compiling Schema
const studentModel = mongoose.model("student", studentSchema);
