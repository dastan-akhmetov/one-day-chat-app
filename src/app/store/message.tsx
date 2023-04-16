import { createContext, useMemo, useState } from "react";

import { UiMessage } from "../domain/Message";
import { ContextProvider } from "./types";

type ContextType = {
  messages: UiMessage[];

  firstMessage: UiMessage;
  lastMessage: UiMessage;
  setMessages: (messages: UiMessage[]) => void;

  prependMessage: (message: UiMessage) => void;
  appendMessage: (message: UiMessage) => void;
  getFirstMessage: () => UiMessage;
  getLastMessage: () => UiMessage;
};

export const MessageStoreContext = createContext<ContextType>(
  {} as ContextType
);

export const MessageStoreContextProvider: ContextProvider = ({ children }) => {
  const [state, setState] = useState<
    Pick<ContextType, "messages" | "firstMessage" | "lastMessage">
  >({
    messages: [],
    firstMessage: {} as UiMessage,
    lastMessage: {} as UiMessage,
  });

  const value = useMemo(() => {
    const setMessages = (messages: UiMessage[]) => {
      setState({
        ...state,
        messages: messages.filter((m) => Boolean(m)),
        firstMessage: messages[0],
        lastMessage: messages[messages.length - 1],
      });
    };

    const prependMessage = (message: UiMessage) => {
      setState({
        ...state,
        messages: message ? [message, ...state.messages] : [...state.messages],
        firstMessage: message,
      });
    };

    const appendMessage = (message: UiMessage) => {
      setState({
        ...state,
        messages: message ? [...state.messages, message] : [...state.messages],
        lastMessage: message,
      });
    };

    const getFirstMessage = () => state.firstMessage;

    const getLastMessage = () => state.lastMessage;

    return {
      ...state,
      setMessages,
      prependMessage,
      appendMessage,
      getFirstMessage,
      getLastMessage,
    };
  }, [state]);

  return (
    <MessageStoreContext.Provider value={value}>
      {children}
    </MessageStoreContext.Provider>
  );
};
