import { useContext, useEffect } from "react";
import { User } from "../../../domain/User";
import { userService } from "../../../service/user";

import { UserStoreContext } from "../../../store/user";
import { useText } from "./useText";

export const useUserList = () => {
  const service = userService();
  const { users, setUsers, user, changeUser } = useContext(UserStoreContext);
  const { onUserChange } = useText();

  const handleUserChange = (user: User) => {
    changeUser(user);
    onUserChange(user);
  };

  const fetchUsers = async () => {
    const data = await service.fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    user,
    changeUser: handleUserChange,
  };
};
