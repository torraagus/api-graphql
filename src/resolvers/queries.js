export const queries_r = {
  hello: () => {
    return "Hello world with graphql";
  },
  greet(root, { name }, { message }) {
    return `Hello ${name} - Context: ${message}`;
  },
};
