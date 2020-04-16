import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `

    type Query {
        hello: String
        greet(name: String): String
    }

    type Mutation {
        createTask(input: TaskInput): String
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    }
    
    input TaskInput {
        title: String!
        description: String!
        number: Int
    }

`;

export default makeExecutableSchema({ typeDefs, resolvers });
