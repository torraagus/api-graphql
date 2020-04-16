export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world with graphql';
        },
        greet(root, { name }) {
            return `Hello ${name}`;
        }
    },
    Mutation: {
        createTask(_, { input }) {
            return input ? 'Task created' : 'Error';
        }
    }
};