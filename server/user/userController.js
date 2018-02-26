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
          group: req.body.group
        }
        
            User.create(newUser, (err, createdUser) => {
              if(err) console.log(err)
              if(createdUser) {
                res.locals.user = createdUser;
                return next();
              }
              res.status(500).send('Username already in use'); //Need to handle when username already exists
            });
    },

    verify: function (req, res, next) {
      req.on('error', (err) => { console.log(err) });
        if (!req.body.username || !req.body.password) {
            res.status(403).send('Invalid Input');
        }
      
      let loginUserRequest = {
          username: req.body.username,
          password: req.body.password
      }
      
        //in the UserModel we need to verify whether the password matches the one encrypted in our data base
      
        User.checkPassword(loginUserRequest, (doc, valid) => {
          if(valid) {
            res.locals.user = doc;
            res.send(res.locals.user);
          }
          res.status(500).send('User not found. Please try again');
        })
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