import { createUser, deleteUser, updateUser } from "../repositories/users";

export const mutations_r = {
  createTask(_root, { input }, ctx) {
    return input ? "Task created" : "Error";
  },
  createUser(_root, { input }, { db, collections: { users } }, info) {
    try {
      return createUser(input, users, db).then((userSaved) => {
        if (!userSaved) throw new Error("Error: User not saved!");
        return `Success: User saved in ${db}!`;
      });
    } catch (err) {
      return err;
    }
  },
  updateUser(_root, { _id, user }, { db, collections: { users } }, info) {
    try {
      return updateUser({ _id, user }, users, db).then((userSaved) => {
        if (!userSaved) throw new Error("Error: User not updated!");
        return `Success: User updated in ${db}!`;
      });
    } catch (err) {
      return err;
    }
  },
  deleteUser(_root, { _id }, { db, collections: { users } }, info) {
    try {
      return deleteUser(_id, users, db).then((userDeleted) => {
        console.log(userDeleted);
        if (!userDeleted) throw new Error("Error: User not deleted!");
        return `Success: User deleted from ${db}!`;
      });
    } catch (err) {
      return err;
    }
  },
};
