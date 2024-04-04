import UserModel from "../models/User.js";
import bcrypt from "bcrypt";

class UserController {
  //rendering home page
  static home = (req, res) => {
    res.render("index");
  };

  //rendering registration page
  static registration = (req, res) => {
    res.render("registration");
  };

  //without hashcode
  //creating and saving all the input value of form in database
  static createUserDoc = async (req, res) => {
    try {
      //Creating New Document using model
      const doc = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      //Saving document
      await doc.save();
      res.redirect("login");
    } catch (error) {
      console.log(error);
    }
  };

  //with hashcode
  //creating and saving all the input value of form in database
  // static createUserDoc = async (req, res) => {
  //   const hashPassword = await bcrypt.hash(req.body.password, 10);
  //   try {
  //     //Creating New Document using model
  //     const doc = new UserModel({
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: hashPassword,
  //     });

  //     //Saving document
  //     await doc.save();
  //     res.redirect("login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //rendering login page
  static login = (req, res) => {
    res.render("login");
  };

  //for without hashcode
  //login the user by comparing email and password
  static verifyLogin = async (req, res) => {
    try {
      const { email, password } = req.body; //this is the value(uemail and upassword) we get from registration form

      const result = await UserModel.findOne({ email: email });
      // console.log(result);
      if (result != null) {
        if (result.email == email && result.password == password) {
          res.send(`<h1>Dashboard..... ${result}</h1>`);
        } else {
          res.send(`<h1>Email or Password is not valid</h1>`);
        }
      } else {
        res.send(`<h1>You are not a registrate user......</h1>`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //for with hashcode
  // static verifyLogin = async (req, res) => {
  //   try {
  //     const { email, password } = req.body; //this is the value(uemail and upassword) we get from registration form

  //     const result = await UserModel.findOne({ email: email });
  //     // console.log(result);
  //     if (result != null) {
  //       const isMatch = await bcrypt.compare(password, result.password);

  //       if (result.email == email && isMatch) {
  //         res.send(`<h1>Dashboard..... ${result}</h1>`);
  //       } else {
  //         res.send(`<h1>Email or Password is not valid</h1>`);
  //       }
  //     } else {
  //       res.send(`<h1>You are not a registrate user......</h1>`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
}

export default UserController;
