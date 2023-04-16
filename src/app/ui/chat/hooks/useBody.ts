import { createRef, useContext, useEffect, useState } from "react";
import { ChannelStoreContext } from "../../../store/channel";
import { MessageStoreContext } from "../../../store/message";
import { messageService } from "../../../service/message";

export const useBody = () => {
  const { fetchLatest } = messageService();
  const wrapperRef = createRef<HTMLDivElement>();
  const [loading, setLoading] = useState(false);
  const { lastMessage, setMessages, messages } =
    useContext(MessageStoreContext);
  const { channel } = useContext(ChannelStoreContext);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      if (channel) {
        const data = await fetchLatest(channel);
        setMessages(data);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const scrollToLatest = () => {
    const top = wrapperRef.current?.scrollHeight;
    wrapperRef.current?.scrollTo({ top });
  };

  useEffect(() => {
    fetchMessages();
  }, [channel]);

  useEffect(() => {
    scrollToLatest();
  }, [channel, lastMessage]);

  return {
    wrapperRef,
    messages,
    loading,
  };
};
