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

const createDoc = async () => {
  try{

    //Creating Document
      const studentDoc = new studentModel({
        name: 'Rahul',
        age: 37,
        fees: 8500.40,
        hobbies: ['dancing', 'reading', 'racing'],
        isactive: true,
        comment: [{value: 'This is good mongoose'}]
      })

      //Saving Document
      const result = await studentDoc.save()
      console.log(result);

  }catch (error) {
    console.log(error);
  }
}


// const createDoc = async (nm, ag, fe, hob, isact, comt) => {
//   try{

//     //Creating Document
//       const studentDoc = new studentModel({
//         name: nm,
//         age: ag,
//         fees: fe,
//         hobbies: hob,
//         isactive: isact,
//         comment: comt
//       })

//       //Saving Document
//       const result = await studentDoc.save()
//       console.log(result);

//   }catch (error) {
//     console.log(error);
//   }
// }


const createMultiDoc = async () => {
  try{

    //Creating Document
      const pritiDoc = new studentModel({
        name: 'priti',
        age: 26,
        fees: 8500.40,
        hobbies: ['dancing', 'reading', 'racing'],
        isactive: true,
        comment: [{value: 'This is good mongoose'}]
      })

      const rockyDoc = new studentModel({
        name: 'Rocky',
        age: 21,
        fees: 8600.40,
        hobbies: ['dancing', 'reading', 'racing'],
        isactive: true,
        comment: [{value: 'This is good mongoose'}]
      })

      const motoDoc = new studentModel({
        name: 'Moto',
        age: 22,
        fees: 8333.40,
        hobbies: ['dancing', 'reading', 'racing'],
        isactive: true,
        comment: [{value: 'This is good mongoose'}]
      })

      //Saving Document
      const result = await studentModel.insertMany([pritiDoc, rockyDoc, motoDoc]);
      console.log(result);

  }catch (error) {
    console.log(error);
  }
}




// export default createDoc;
export {createDoc, createMultiDoc};

