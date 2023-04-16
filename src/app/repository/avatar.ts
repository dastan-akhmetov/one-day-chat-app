import avatarApi from "../api/avatar";
import { User } from "../domain/User";

export const avatarRepository = () => {
  const getByUserId = (userId: User) => avatarApi.getByUserId(userId);

  return {
    getByUserId,
  };
};
