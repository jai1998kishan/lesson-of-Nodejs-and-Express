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


//Update Document
const updateDocById = async (id) => {
  try{
    // const result = await studentModel.findByIdAndUpdate(id, {name: 'Sunil'});   // this will return the previous values in console
    const result = await studentModel.findByIdAndUpdate(id, {name: 'Sameer'}, {returnDocument: "after"});   // this will return the updated values in console
    console.log(result);
  }catch(error){
    console.log(error);
  }
}


const updateoneDoc = async (id) => {
  try{
    const result = await studentModel.updateOne({_id:id}, {name:'Sujit'});
    // const result = await studentModel.updateOne({_id:id}, {name:'Arjun'}, {upsert: true});
    console.log(result);
  }catch(error){
    console.log(error);
  }
}


const updateoneDocByAge = async (a) => {
  try{
    const result = await studentModel.updateOne({age:a}, {name:'Mouse'});  //if the age is prsesnt more then one then it going to update the first one only beacuse method is update only one
    // in a similler away we can change name also and every parameters
    console.log(result);
  }catch(error){
    console.log(error);
  }
}


const updatemanyDoc = async (a) => {
  try{
    // const result = await studentModel.updateMany({age:a}, {name:'Dollar'});  //if the age is prsesnt more then one then it going to update the all
    const result = await studentModel.updateMany({age:a}, {name:'Maths'}, {upsert: true}); 
    console.log(result);
  }catch(error){
    console.log(error);
  }
}



export {
  updateDocById,
  updateoneDoc,
  updateoneDocByAge,
  updatemanyDoc,
};



