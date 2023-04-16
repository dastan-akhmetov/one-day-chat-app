import userApi from "../api/user";

export const userRepository = () => {
  const fetchUsers = () => {
    return userApi.fetchUsers();
  };

  return {
    fetchUsers,
  };
};
