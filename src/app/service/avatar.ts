import { User } from "../domain/User";
import { avatarRepository } from "../repository/avatar";

export const avatarService = () => {
  const repository = avatarRepository();

  const getByUserId = (userId: User) => repository.getByUserId(userId);

  return {
    getByUserId,
  };
};
