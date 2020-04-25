import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      minlength: [3, "Username too short (min. length is 3)"],
    },
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Firstname too short (min. length is 3)"],
    },
    lastname: {
      type: String,
      maxlength: [10, "Lastname too large (max. length is 10)"],
    },
    age: Number,
  },
  { _id: true, timestamps: true }
);

// Instance Methods are used by instance of a model, an instance of a model is called a document
/*userSchema.methods.findByLastname = async function (lastname) {
  return await this.model("user").find({ lastname: lastname });
};

// Statics function are used by model
userSchema.statics.findByName = function (lastname) {
  return this.find({ lastname: new RegExp(lastname, "i") }).then((val) => console.log(val));
};

userSchema.static("findByFirstname", function (firstname) {
  return this.find({ firstname: firstname }).then((val) => {return val});
});*/

export default model("user", userSchema);
