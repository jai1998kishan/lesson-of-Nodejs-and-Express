class StudentController {
  //Get Session Information
  static get_session_info = (req, res) => {
    console.log(req.session);
    console.log(req.session.id);
    console.log(req.session.cookie);
    console.log(req.session.cookie.maxAge);
    console.log(req.session.cookie.originalMaxAge);
    console.log(req.sessionID);
    res.send("Session Info....");
  };

  //regenerating session
  static regn_session = (req, res) => {
    req.session.regenerate(() => {
      console.log(`Session regenerated.. new session ID ${req.session.id}`);
      res.send("Session Regenerated.....");
    });
  };

  //Delete session
  static delete_session = (req, res) => {
    req.session.destroy(() => {
      console.log(
        `Session Deleted....  Cannot Acess Session ${req.session.id}`
      );
    });
    res.send("Session is deleted....");
  };

  static session_example = (req, res) => {
    req.session.device = "Mobile";
    if (req.session.count) {
      req.session.count++;
    } else {
      req.session.count = 1;
    }
    res.send(`Count: ${req.session.count}`);
  };

  static get_session_data = (req, res) => {
    if (req.session.device) {
      res.send(`Device: ${req.session.device} Count: ${req.session.count}`);
    } else {
      res.send("session device is not found");
    }
  };
}

export default StudentController;
