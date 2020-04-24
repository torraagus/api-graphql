import { userInput } from "./entities/user/input";
import { taskInput } from "./entities/task/input";

export const orderInput = `input OrderInput {
    sortBy: String!
    order: String!
}
`
export const inputs = `
    ${userInput}
    ${taskInput}
    ${orderInput}
`;
