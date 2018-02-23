const mongoose = require('mongoose');
const { User } = require('./userModel');

// post that will contain username and password to create a new user or login 
const userController = {
    
    signup: function (req, res, next) {
        req.on('error', (err) => { console.log(err) });

        if (!req.body.username || !req.body.password) {
            res.status(403).send('Invalid Input');
        }

        let newUserRequest = {
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
        let loggedInUser= User.verifyUser(loginUserRequest);

        if (loggedInUser) {
            res.locals.user = loggedInUser;
            next();
        }

        if (!loggedInUser) {
            res.status(500).send('User not found. Please try again');
        }
    }

}

module.exports = userController;

// 