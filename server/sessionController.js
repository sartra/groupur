const Session = require('./sessionModel');

const sessionController = {};

sessionController.verifySession = (req, res) => {
  Session.findOne({cookieId: req.cookies.ssid}, (err, result) => {
    if(err || !result){
      return res.send({
        status: false
      });
    }
  //res.render(main page)
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