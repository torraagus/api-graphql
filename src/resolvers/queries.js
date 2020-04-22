import users from "../data/users";

export const queries_r = {
  test: () => {
    return "Hello world with graphql";
  },
  getUsers(root, args, ctx) {
    return users;
  },
};
