const mongoose = require('mongoose');
const User = require('./userModel');

// post that will contain username and password to create a new user or login 
const userController = {
    
    signup: function (req, res, next) {
        req.on('error', (err) => { console.log(err) });

        if (!req.body.username || !req.body.password) {
            res.status(403).send('Invalid Input');
        }
      
        let newUser = {
          username: req.body.username,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        }
        
        User.find({}, (err,result) => {
          if(err) console.log(err)
          console.log(result)
        });

        console.log('REQ.BODY', req.body)
        // if (User.userExists(newUser)) {
        //   res.end()
        // }
        // else {
          console.log('hey')
          User.create(newUser, (err, doc) => {
            if(err) console.log(err)
            if(doc) {
              res.locals.user = doc;
              return next();
            }

            res.status(418).send();
          });

          // let user = new User({
          //   username: newUser.username,
          //   password: newUser.password
          // });

          // console.log('user:  ' + user);

          // user.save(function (err, user) {
          //   console.log('in save', user)
          //   res.locals.user = user;
          //   next();
          // })
        // }

      

        // if (createdUser) {
        //     // User details are accessible for creating the cookie, etc in res.locals.user
        //     // res.locals.user = createdUser;
        //     next();
        // }

        // if (!createdUser) res.end() // stay on landing page
    },

    verify: function (req, res, next) {
        req.on('error', (err) => { console.log(err) });
        
     
        let loginUserRequest = {
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
        if (!req.body.username || !req.body.password) {
            res.status(403).send('Invalid Input');
        }

        //in the UserModel we need to verify whether the password matches the one encrypted in our data base
        let loggedInUser = User.verifyUser(loginUserRequest);

        if (loggedInUser) {
            res.locals.user = loggedInUser;
            next();
        }

        if (!loggedInUser) {
            res.status(500).send('User not found. Please try again');
        }
    },

    addGroup: function (req, res) {
      //we need username of User
      //we need group id, group name, and amount User is purchasing
      User.findOneAndUpdate({username: req.body.username}, { $push: { groups: req.body }}, {new: true}, (err, group) => {
        if (err) return res.sendStatus(400);
      })
    },

    removeGroup: function (req, res) {
      User.findOneAndUpdate({username: req.body.username}, { $pull: { groups: req.body._id }}, {new: true}, (err, group) => {
        if (err) return res.sendStatus(400);
      })
    }

}

module.exports = userController;

// 