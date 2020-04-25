import { createUser, deleteUser, updateUser } from "../repositories/users";



export const mutations_r = {
  createTask(_root, { input }, ctx) {
    return input ? "Task created" : "Error";
  },
  createUser(_root, { input }, ctx, info) {
    try {
      return createUser(input).then((userSaved) => {
        if (!userSaved) throw new Error("Something went wrong. User not saved!");
        return `Success: User saved!`;
      });
    } catch (err) {
      return err;
    }
  },
  updateUser(_root, { _id, user }, ctx, info) {
    try {
      return updateUser({ _id, user }).then((userSaved) => {
        if (!userSaved) throw new Error("Error: User not updated!");
        return `Success: User updated!`;
      });
    } catch (err) {
      return err;
    }
  },
  deleteUser(_root, { _id }, ctx, info) {
    try {
      return deleteUser(_id).then((userDeleted) => {
        if (!userDeleted) throw new Error("Error: User not deleted!");
        return `Success: User deleted!`;
      });
    } catch (err) {
      return err;
    }
  },
};
