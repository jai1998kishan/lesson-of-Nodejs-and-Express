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

//Compiling Schema
const studentModel = mongoose.model("student", studentSchema);

// retrieve All Document
const getAllDoc = async () => {
  const result = await studentModel.find();
  console.log(result);
  // result.forEach((item) => console.log(
  //   item.name,
  //   item.age,
  //   item.fees.toString(),
  //   item.hobbies[0],
  //   item.hobbies[1],
  //   item.comment[0].value,
  //   item.comment[0].publish,
  //   item.join
  // ))
};

// retrieve All Document with Specific Fields
const getAllDocSpecificField = async () => {
  const result = await studentModel.find().select("name age"); //Include
  // const result = await studentModel.find().select(['name', 'age']); //Include
  // const result = await studentModel.find().select({name:1, age:1}); //Include

  // const result = await studentModel.find().select('-name -age'); //Exclude
  // const result = await studentModel.find().select(['-name', '-age']); //Exclude
  // const result = await studentModel.find().select({name:0, age:0}); //Exclude

  // const result = await studentModel.find({}, 'name age');
  console.log(result);
};

//Retrive Single Documnet
const getSingleDoc = async () => {
  const result = await studentModel.findById("65c0e376ee6ba76237cca6a0");
  console.log(result); //This is returning the object of kunal so we dont need to use foreach
  // console.log(result._id.getTimestamp(),result.name, result.age, result.fees.toString());
};

//Retrive Single Documnet with Specific field
const getSingleDocSpecificField = async () => {
  const result = await studentModel.findById(
    "65c0e376ee6ba76237cca6a0",
    "name age"
  );
  console.log(result);
  // console.log(result._id.getTimestamp(),result.name, result.age, result.fees.toString());
};

//Retrieve Document by Field
const getDocByField = async () => {
  const result = await studentModel.find({ name: "Sonam" });
  // const result = await studentModel.find({age: 26});
  console.log(result);
  // console.log(result[0].name, result[0].age, result[0].fees.toString());
};

//Retrieve Document by Field with Specific field
const getDocByFieldSpecificField = async () => {
  const result = await studentModel.find({ name: "Sonam" }).select("name age");
  console.log(result);
};

//Retrieve Limited Document
const getLimitedDoc = async () => {
  const result = await studentModel.find().limit(4);
  // const result = await studentModel.find({}, null, {limit: 4});
  console.log(result);
};

//Retrieve skip Document
const getSkipDoc = async () => {
  const result = await studentModel.find().skip(1);
  // const result = await studentModel.find({}, null, {skip: 1});
  console.log(result);
};

//Count Document
const getCountDoc = async () => {
  const result = await studentModel.find().countDocuments();
  console.log(result);
};

//Sort Document
const getSortedDoc = async () => {
  // const result = await studentModel.find().sort({age:1});  // increasing order
  const result = await studentModel.find().sort({ age: -1 }); //decreasing order
  console.log(result);
};

//Mix Document
const mixDoc = async () => {
  const result = await studentModel.find(
    {},
    { name: 1, age: 1 },
    { limit: 5, skip: 1 }
  );
  console.log(result);
};

// Comparsion Query Operator
const compDoc = async () => {
  // const result = await studentModel.find({age: {$gt: 26}});  // greater then(gt) 26
  // const result = await studentModel.find({age: {$gte: 26}});    // greater then equal(gte) to 26
  // const result = await studentModel.find({age: {$lt: 26}});        // less then (lt) 26
  // const result = await studentModel.find({age: {$lte: 26}});          // less then equal to 26
  // const result = await studentModel.find({age: {$ne: 26}});          // not equal to 26
  // const result = await studentModel.find({age: {$in: [21,26]}});        // return those who have 21 and 26 age
  const result = await studentModel.find({age: {$nin: [21,26]}});      // return those who age don't have 21 and 26 
  console.log(result);
};


// Logical Query Operator
const logDoc = async () => {
  // const result = await studentModel.find({$and: [{age:26}, {fees:8500.4}]});   // $and: (and operator)  if both age = 26 and fees = 8500.4 then it will show result otherwise it will show empty array
  // const result = await studentModel.find({$or: [{age:26}, {fees:18500.4}]});      //$or: (operator) if any one is match it will show result
  // const result = await studentModel.find({$and: [{age:{ $gt:26}}, {fees:8500.4}]});
  // const result = await studentModel.find({$or: [{age:{ $gt:29}}, {fees:8333.4}]});
  // const result = await studentModel.find({age: {$not: {$gt: 25}}});
  const result = await studentModel.find({$nor: [{age: 27}, {fees: 8500.4}]});
  console.log(result);
};

export {
  getAllDoc,
  getAllDocSpecificField,
  getSingleDoc,
  getSingleDocSpecificField,
  getDocByField,
  getDocByFieldSpecificField,
  getLimitedDoc,
  getSkipDoc,
  getCountDoc,
  getSortedDoc,
  mixDoc,
  compDoc,
  logDoc,
};
