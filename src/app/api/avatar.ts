import { User } from "../domain/User";

const getByUserId = (userId: User) => {
  const makeUrl = (name: string) => `/assets/img/${name}.png`;

  switch (userId) {
    case "Joyse": {
      return makeUrl(userId);
    }
    case "Russell": {
      return makeUrl(userId);
    }
    case "Sam": {
      return makeUrl(userId);
    }
    default: {
      return makeUrl("Placeholder");
    }
  }
};

const avatarApi = {
  getByUserId,
};

export default avatarApi;
