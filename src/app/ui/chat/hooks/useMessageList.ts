import { useContext } from "react";

import { MessageStoreContext } from "../../../store/message";

export const useMessageList = () => {
  const { messages } = useContext(MessageStoreContext);

  return {
    messages,
  };
};
