import users from "../data/users";
import { getUsers } from '../repositories/users';

export const queries_r = {
  test: () => {
    return "Hello world with graphql";
  },
  getUsers(root, { order, skip, limit }, { db, collections: { users } }) {
    try {
      return getUsers(users, db, order, skip, limit).then((users) => {
        if (!users) throw new Error("Error: cannot get users");
        return users;
      });
    } catch (error) {
      return error;
    }
  },
};
