export const queries_r = {
  test: () => {
    return "Hello world with graphql";
  },
  getUsers(root, args , { users }) {
    return users;
  },
};
