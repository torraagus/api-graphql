import { firebase } from "../exports";
import validate from "../validations/users";
import User from "../models/User";

async function createUser(input, collection, curr_db) {
  const newUser = new User(input);
  const user = curr_db == "mongodb" ? newUser : newUser.toObject();

  try {
    // validate input with mongoose model
    const userErrors = validate(newUser);
    if (userErrors) throw new Error(`${userErrors}`);
    switch (curr_db) {
      case "memory":
        // save to array in memory
        collection.push(user);
        return true;
      case "mongodb":
        // save to mongodb in atlas platform
        await user.save();
        return true;
      case "firestore":
        // save to firestore db
        var db = firebase.firestore();
        return await db
          .collection(collection)
          .add(user)
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            return true;
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
            return false;
          });
    }
  } catch (err) {
    throw err;
  }
}

async function updateUser(input, collection, curr_db) {
  const newUser = new User(input.user);
  /*
  const user = curr_db == "mongodb" ? newUser : newUser.toObject();*/

  try {
    // validate input with mongoose model
    const userErrors = validate(newUser);
    if (userErrors) throw new Error(`${userErrors}`);
    switch (curr_db) {
      case "memory":
        // update user in array in memory
        const index = collection.findIndex((value) => {
          return input._id == value._id;
        });
        if (index == -1) return false;
        input.user._id = input._id;
        collection.splice(index, 1, input.user);
        return true;
      case "mongodb":
        // update user to mongodb in atlas platform
        return await User.findOneAndUpdate({ _id: input._id }, input.user)
          .then((val) => {
            console.log(val);
            if (!val) return false;
            return true;
          })
          .catch((e) => {
            console.log(e);
            return false;
          });
      case "firestore":
        // update user in firestore db
        var db = firebase.firestore();
        return await db
          .collection(collection)
          .doc(input._id)
          .update(input.user)
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          });
    }
  } catch (err) {
    throw err;
  }
}

async function deleteUser(id, collection, curr_db) {
  try {
    switch (curr_db) {
      case "memory":
        // delete user from array in memory
        const index = collection.findIndex((value) => {
          return id == value._id;
        });
        if (index == -1) return false;
        collection.splice(index, 1);
        return true;
      case "mongodb":
        // delete document from mongodb in atlas platform
        return await User.findOneAndRemove({ _id: id })
          .then((val) => {
            if (!val) return false;
            return true;
          })
          .catch(() => {
            return false;
          });
      case "firestore":
        // delete document from firestore db
        var db = firebase.firestore();
        return await db
          .collection(collection)
          .doc(id)
          .delete()
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          });
    }
  } catch (err) {
    throw err;
  }
}

module.exports = { createUser, deleteUser, updateUser };
