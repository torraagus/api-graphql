import { userType } from './entities/user/type';
import { orderInput } from './inputs';

export const queries = `
    type Query {
        test: String
        getUsers(order: OrderInput, skip: Int, limit: Int): [User]
    }
`