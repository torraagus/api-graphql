import { getUsers } from '../repositories/users';

export const queries_r = {
  test: () => {
    return "Hello world with graphql";
  },
  getUsers(root, { order, skip, limit }, ctx) {
    try {
      return getUsers(order, skip, limit).then((users) => {
        if (!users) throw new Error("Error: cannot get users");
        return users;
      });
    } catch (error) {
      return error;
    }
  },
};
