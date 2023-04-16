import { useContext, useState } from "react";
import { Channel } from "../../../domain/Channel";
import { messageService } from "../../../service/message";
import { ChannelStoreContext as ChannelContext } from "../../../store/channel";
import { MessageStoreContext as MessageContext } from "../../../store/message";

export const useReadMore = () => {
  const service = messageService();
  const { channel } = useContext(ChannelContext);
  const { prependMessage, appendMessage, getFirstMessage, getLastMessage } =
    useContext(MessageContext);
  const [loading, setLoading] = useState(false);

  const fetchMoreMessages = async (
    channel: Channel,
    messageId: string,
    old: boolean
  ) => {
    const [newMessage] = await service.fetchMore(channel, messageId, old);
    if (!newMessage) return;

    if (old) {
      prependMessage(newMessage);
    } else {
      appendMessage(newMessage);
    }
  };

  const fetchOlder = async () => {
    try {
      setLoading(true);
      const firstMessage = getFirstMessage();
      await fetchMoreMessages(channel, firstMessage.messageId, true);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const fetchNewer = async () => {
    try {
      setLoading(true);
      const lastMessage = getLastMessage();
      await fetchMoreMessages(channel, lastMessage.messageId, false);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchOlder,
    fetchNewer,
    loading,
  };
};
