import User from "../models/User";
import { formatError } from "../errors";

export const mutations_r = {
  createTask(_, { input }) {
    return input ? "Task created" : "Error";
  },
  async createUser(_, { input }) {
    const newUser = new User(input);
    try {
      await newUser.save();
      return "User saved!";
    } catch (e) {
      return formatError(e.errors);
    }
  },
};
