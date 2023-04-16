import { useContext, useState } from "react";
import { UiMessage } from "../../../domain/Message";
import { User } from "../../../domain/User";
import { avatarService } from "../../../service/avatar";
import { messageService } from "../../../service/message";

import { ChannelStoreContext } from "../../../store/channel";
import { MessageStoreContext } from "../../../store/message";
import { UserStoreContext } from "../../../store/user";

export const useMessageItem = () => {
  const message = messageService();
  const avatar = avatarService();
  const { user } = useContext(UserStoreContext);
  const { channel } = useContext(ChannelStoreContext);
  const { appendMessage, getLastMessage } = useContext(MessageStoreContext);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    try {
      setLoading(true);
      await message.send(channel, user, text);

      const lastMessage = getLastMessage();
      const [newMessage] = await message.fetchMore(
        channel,
        lastMessage.messageId,
        false
      );

      appendMessage({ ...newMessage, status: "Sent" });
    } catch (e) {
      const newMessage = {
        messageId: (Date.now() + Math.random()).toPrecision(),
        text,
        userId: user,
        datetime: new Date().toISOString(),
        status: "Error",
      } as UiMessage;

      appendMessage(newMessage);
    } finally {
      setLoading(false);
    }
  };

  const getAvatarUrl = (userId: User) => {
    return avatar.getByUserId(userId);
  };

  return {
    sendMessage,
    getAvatarUrl,
    user,
    loading,
  };
};
