const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

// Create schema for todo
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "The Name is required"],
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
  },
});

// Password hashing function that will get triggered when current password is changed or when the new user is created

UserSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.hash(user.password, 10, function (hashError, hash) {
      if (hashError) {
        return next(hashError);
      }

      user.password = hash;
      next();
    });
  } else {
    return next();
  }
});

// Create model for todo
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
