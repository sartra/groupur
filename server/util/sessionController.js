const Session = require('./sessionModel');

const sessionController = {};

sessionController.verifySession = (req, res) => {
  Session.findOne({cookieId: req.cookies.ssid}, (err, result) => {
    if(err || !result){
      return res.send({
        status: false
      });
    }
    res.send({
      status: true
    });
  });
};

sessionController.startSession = (req, res) => {
  let session = new Session ({
    cookieId: req.cookies.ssid
  });
  session.save(function(error, session) {
    if(error) res.send(500, error);
    return res.send(res.locals.user);
  });
};

module.exports = sessionController;