import { firebase } from "../exports";
import validate from "../validations/users";
import User from "../models/User";

async function createUser(input) {
  const newUser = new User(input);

  try {
    // validate input with mongoose model
    const userErrors = validate(newUser);
    if (userErrors) throw new Error(`${userErrors}`);
    // save to mongodb in atlas platform
    await newUser.save();
    return true;
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
        console.log(val);
        if (!val) return false;
        return true;
      })
      .catch((e) => {
        console.log(e);
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
    // get documents from mongodb in atlas platform
    const opt = {};
    if (skip) opt["skip"] = skip;
    if (limit) opt["limit"] = limit;
    const sort = {};
    if (order) {
      sort[order.sortBy] = order.order;
      opt["sort"] = sort;
    }
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
