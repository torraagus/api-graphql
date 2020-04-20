import User from "../models/User";
import { formatError } from "../errors";
//import { users } from '../data/users';

export const mutations_r = {
  createTask(_, { input }) {
    return input ? "Task created" : "Error";
  },
  async createUser(_, { input }, { users }) {
    const newUser = new User(input);
    try {
      //await newUser.save(); // save to mongodb in atlas platform
      users.push(newUser);v // save to users array in memory
      return "User saved!";
    } catch (e) {
      return formatError(e.errors);
    }
  },
};
