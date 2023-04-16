import React from "react";
import { UiMessage } from "../../../../domain/Message";
import { MessageItem } from "./MessageItem";

import { useMessageList } from "../../hooks/useMessageList";

export const MessageList = React.memo(() => {
  const { messages } = useMessageList();

  return (
    <div>
      {messages.map((message: UiMessage) => (
        <MessageItem key={message.messageId} {...(message as UiMessage)} />
      ))}
    </div>
  );
});
