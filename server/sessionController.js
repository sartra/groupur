const Session = require('./sessionModel');

const sessionController = {};

sessionController.verifySession = (req, res) => {
  Session.findOne({cookieId: req.cookies.ssid}, (err, result) => {
    if(err || !result){
<<<<<<< HEAD
      return res.send(false);
=======
      return res.send({
        status: false
      });
>>>>>>> b413ba581656cfd4e19d2aa780150617f41476e1
    }
  res.send(true);
  });
};

sessionController.startSession = (req, res) => {
  let session = new Session ({
    cookieId: req.cookies.ssid
  });
  session.save(function(error, session) {
    if(error) return res.send(true);
    //res.render(main page)
  });
};

module.exports = sessionController;