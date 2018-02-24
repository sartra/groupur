

const sessionController = {
    verifySession: function(req, res) {
        console.log('in verifySession', req);
        console.log('response', res);
        req.on('error', (err) => {console.log(err)});
        res.send({"result": true});
    }

};

module.exports = sessionController;