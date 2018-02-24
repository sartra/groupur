const mongoose = require('mongoose');
const  User  = require('./userModel');

// post that will contain username and password to create a new user or login 
const userController = {
    
    signup: function (req, res, next) {
        console.log(req.body)
        req.on('error', (err) => { console.log(err) });

        if (!req.body.username || !req.body.password) {
            res.status(403).send('Invalid Input');
        }

        let newUser = {
            username: req.body.username,
            password: req.body.password
        }
        
        let createdUser = User.findOrCreate(newUser);

        if (createdUser) {
            // User details are accessible for creating the cookie, etc in res.locals.user
            res.locals.user = createdUser;
            next();
        }

        if (!createdUser) res.end() // stay on landing page
    },

    verify: function (req, res, next) {
        req.on('error', (err) => { console.log(err) });

        let loginUserRequest = {
            username: req.body.username,
            password: req.body.password
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