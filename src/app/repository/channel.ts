import channelApi from "../api/channel";

export const channelRepository = () => {
  const fetchChannels = () => channelApi.fetchChannels();

  return {
    fetchChannels,
  };
};
