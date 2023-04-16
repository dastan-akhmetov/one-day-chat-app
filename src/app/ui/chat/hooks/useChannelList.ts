import { useContext, useEffect } from "react";
import { channelService } from "../../../service/channel";

import { ChannelStoreContext } from "../../../store/channel";

export const useChannelList = () => {
  const service = channelService();
  const { channels, setChannels, channel, changeChannel } =
    useContext(ChannelStoreContext);

  const fetchChannels = async () => {
    const data = await service.fetchChannels();
    setChannels(data);
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  return {
    channels,
    channel,
    changeChannel,
  };
};
