import { createContext, useMemo, useState } from "react";
import { User } from "../domain/User";
import { ContextProvider } from "./types";

type ContextType = {
  user: User;
  users: User[];
  changeUser: (user: User) => void;
  setUsers: (users: User[]) => void;
};

export const UserStoreContext = createContext<ContextType>({} as ContextType);

export const UserStoreContextProvider: ContextProvider = ({ children }) => {
  const [state, setState] = useState<Pick<ContextType, "user" | "users">>({
    user: User.Joyse,
    users: [],
  });

  const value = useMemo(() => {
    const changeUser = (user: User) => {
      setState({
        ...state,
        user,
      });
    };

    const setUsers = (users: User[]) => {
      setState({ ...state, users });
    };

    return {
      ...state,
      changeUser,
      setUsers,
    };
  }, [state]);

  return (
    <UserStoreContext.Provider value={{ ...value }}>
      {children}
    </UserStoreContext.Provider>
  );
};
