import { userType } from './entities/user/type';

export const queries = `
    type Query {
        test: String
        getUsers: [User]
    }
`