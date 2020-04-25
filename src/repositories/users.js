import validate from "../validations/users";
import User from "../models/User";
import { formatError } from "../errors";
import utils from "./utils/utils";

async function createUser(input) {
  const newUser = new User(input);

  try {
    // validate input with mongoose model
    const errors = validate(newUser);
    if (errors) throw new Error(`${errors}`);
    // save to mongodb in atlas platform
    return await newUser
      .save()
      .then(() => {
        return true;
      })
      .catch((err) => {
        if (err) throw new Error(formatError(err));
      });
  } catch (err) {
    throw err;
  }
}

async function updateUser(input) {
  const newUser = new User(input.user);

  try {
    // validate input with mongoose model
    const userErrors = validate(newUser);
    if (userErrors) throw new Error(`${userErrors}`);
    // update user to mongodb in atlas platform
    return await User.findOneAndUpdate({ _id: input._id }, input.user)
      .then((val) => {
        if (!val) return false;
        return true;
      })
      .catch((e) => {
        return false;
      });
  } catch (err) {
    throw err;
  }
}

async function deleteUser(id) {
  try {
    // delete document from mongodb in atlas platform
    return await User.findOneAndRemove({ _id: id })
      .then((val) => {
        if (!val) return false;
        return true;
      })
      .catch(() => {
        return false;
      });
  } catch (err) {
    throw err;
  }
}

async function getUsers(order, skip, limit) {
  try {
    // create options object
    const opt = utils.createOptObj(order, skip, limit);

    // get documents from mongodb in atlas platform
    return await User.find({}, null, opt)
      .then((docs) => {
        if (!docs) return false;
        return docs;
      })
      .catch(() => {
        return false;
      });
  } catch (err) {
    throw err;
  }
}

module.exports = { createUser, deleteUser, updateUser, getUsers };
