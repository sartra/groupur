const mongoose = require('mongoose');
const Schema = mongoose.Schema;

console.log('HITTING THE USERMODEL ON POST')
const userSchema = new Schema ({
    username: {type: String, required: false},
    password: { type: String, required: false},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    // groups: [{group_id: Number, group_name: String, amount: Number}]
});

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

//Encrypt the password with bcrypt before saving
userSchema.pre('save', function(next){
  // const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
  console.log('wadduppp')
  this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
  next();
});

// userSchema.statics.userExists = function(user) {
//   this.findOne({username: user.username}, (err, doc) => {
//     if (doc) return false ; //User already exists so create unsuccessful, we should render a messages saying the user already exists rather than logging them in.
//     if (!doc) {
//         return true;
//     }
//   });
// }

//Creates a new user if the user doesn't exist. If successful return the new entry. If the user already exists return null.
// userSchema.statics.findOrCreate = function(newUser, cb) {
//   // console.log('yoooooooo')
//   this.findOne({username: newUser.username}, function(err, doc){
//     if(!doc){
//       // create user
//       return this.create({username: newUser.username, password: newUser.password}, function(err, newDoc){
//         res.locals.user = newDoc;
//         cb(res.locals.user);
//       })
//     }
//     return cb(doc);
//   })
    // this.findOne({username: newUser.username}, (err, doc) => {
    //     if (doc) return null ; //User already exists so create unsuccessful, we should render a messages saying the user already exists rather than logging them in.
    //     if (!doc) {
    //         this.create({username: newUser.username, password: newUser.password}, (err, newDoc) => {
    //             // if (err) res.status(500).send(err);
    //             if (newDoc) return newDoc;
    //             return null;
    //         })
    //     }
    // })
// }

//returns null if unsuccessful or the found entry if successful
// userSchema.statics.verifyUser = function(password) {
//   this.findOne({username: username}, (err, doc) => {
//     // if (err) res.status(500).send(err);
//     if (doc) {
//       if (doc.password = bcrypt.hashSync(password, SALT_WORK_FACTOR)) return doc;
//     }
//     return null;
//   });
// }



const User = mongoose.model('User', userSchema);

module.exports = User;
