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
  { _id: process.env.current_db == 'firestore' ? false : true }
);

export default model("user", userSchema);
