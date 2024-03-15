class StudentController {
  static set_cookie = (req, res) => {
    //session cookies
    res.cookie("username", "geekyshow");
    res.cookie("cart", 5);

    //Persistent cookies
    // res.cookie("username", "geekyshow", { maxAge: 10000 });

    res.send("Cookie set......");
  };

  static get_cookie = (req, res) => {
    console.log(req.cookies);
    console.log(req.cookies.username);
    console.log(req.cookies.cart);
    res.send("Cookie get.......");
  };

  static delete_cookie = (req, res) => {
    res.clearCookie("username");
    res.send("Cookie delete.......");
  };
}

export default StudentController;
