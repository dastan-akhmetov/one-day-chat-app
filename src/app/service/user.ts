import { userRepository } from "../repository/user";

export const userService = () => {
  const repository = userRepository();

  const fetchUsers = () => {
    return repository.fetchUsers();
  };

  return {
    fetchUsers,
  };
};
