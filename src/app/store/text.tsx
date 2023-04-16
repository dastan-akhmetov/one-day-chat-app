import { createContext, useMemo, useState } from "react";
import { User } from "../domain/User";
import { ContextProvider } from "./types";

type ContextType = {
  text: Record<User, string>;
  addText: (user: User, text: string) => void;
  removeText: (user: User) => void;
  onUserChange: (user: User) => void;
};

export const TextStoreContext = createContext<ContextType>({} as ContextType);

export const TextStoreContextProvider: ContextProvider = ({ children }) => {
  const [state, setState] = useState<Pick<ContextType, "text">>({
    text: {} as Record<User, string>,
  });

  const value = useMemo(() => {
    const addText = (user: User, text: string) => {
      setState({
        ...value,
        text: {
          ...value.text,
          [user]: text,
        },
      });
    };

    const removeText = (user: User) => {
      setState({
        ...value,
        text: {
          ...value.text,
          [user]: "",
        },
      });
    };

    const onUserChange = (user: User) => {
      setState({
        ...value,
        text: {
          ...value.text,
          [user]: value.text[user] || "",
        },
      });
    };

    return {
      ...state,
      addText,
      removeText,
      onUserChange,
    };
  }, [state]);

  return (
    <TextStoreContext.Provider value={{ ...value }}>
      {children}
    </TextStoreContext.Provider>
  );
};
