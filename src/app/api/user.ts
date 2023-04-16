import { User } from "../domain/User";

const fetchUsers = () => {
  return Promise.resolve(["Joyse", "Russell", "Sam"] as User[]);
};

const userApi = {
  fetchUsers,
};

export default userApi;
