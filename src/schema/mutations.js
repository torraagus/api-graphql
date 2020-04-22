export const mutations = `
    type Mutation {
        createTask(input: TaskInput): String

        createUser(input: UserInput): String
        updateUser(_id: String, user: UserInput): String
        deleteUser(_id: String): String
    }
`

