import { Channel } from "../domain/Channel";
import { Message, MessageStatus } from "../domain/Message";
import { User } from "../domain/User";
import { messageRepository } from "../repository/message";

export const messageService = () => {
  const repository = messageRepository();

  const fetchLatest = async (channel: Channel) => {
    const messages = await repository.fetchLatestMessages(channel);

    const sortedByDateAsc = messages.slice().sort((a: Message, b: Message) => {
      const timeA = new Date(a.datetime).getTime();
      const timeB = new Date(b.datetime).getTime();

      return timeA - timeB;
    });

    const uiData = sortedByDateAsc.map((message: Message) => ({
      ...message,
      status: "Sent" as MessageStatus,
    }));

    return uiData;
  };

  const fetchMore = (channel: Channel, messageId: string, old: boolean) => {
    return repository.fetchMoreMessages(channel, messageId, old);
  };

  const send = async (channel: Channel, user: User, text: string) => {
    return repository.sendMessage(channel, text, user);
  };

  return {
    fetchLatest,
    fetchMore,
    send,
  };
};
