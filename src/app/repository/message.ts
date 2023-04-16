import messageApi from "../api/message";
import { Channel } from "../domain/Channel";
import { User } from "../domain/User";
import { Message } from "../domain/Message";

export const messageRepository = () => {
  const { fetchLatest, fetchMore, post } = messageApi;

  const fetchLatestMessages = (channel: Channel): Promise<Message[]> => {
    return fetchLatest({ channel });
  };

  const fetchMoreMessages = (
    channel: Channel,
    messageId: string,
    old: boolean
  ) => {
    return fetchMore({ channel, messageId, old });
  };

  const sendMessage = (channel: Channel, text: string, user: User) => {
    return post({ channel, text, user });
  };

  return {
    fetchLatestMessages,
    fetchMoreMessages,
    sendMessage,
  };
};
