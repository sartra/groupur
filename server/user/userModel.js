const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    id: {type: Number, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: { type: String, required: true},
    firstName: {type: String, required: true, default: null},
    lastName: {type: String, required: true, default: null},
    groups: {type: Object, required: false, default:{}}
});

//Encrypt the password with bcrypt before saving
userSchema.pre('save', function(next) {

    next();
});

//Creates a new user if the user doesn't exist. If successful return the new entry. If the user already exists return null.
userSchema.statics.findOrCreate = function(username, password) {
    this.findOne({username:username}, (err, doc) => {
        if (err) res.status(500).send(err);
        if (doc) return null ; //User already exists so create unsuccessful, we should render a messages saying the user already exists rather than logging them in.
        if (!doc) {
            this.create({username: username, password: password}, (err, newDoc) => {
                if (err) res.status(500).send(err);
                if (newDoc) return newDoc;
                return null;
            })
        }
    })
}

//returns null if unsuccessful or the found entry if successful
userSchema.statics.verifyUser = function(password) {

}



const User = mongoose.model('User', userSchema);

module.exports = User;
