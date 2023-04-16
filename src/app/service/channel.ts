import { channelRepository } from "../repository/channel";

export const channelService = () => {
  const repository = channelRepository();

  const fetchChannels = () => repository.fetchChannels();

  return {
    fetchChannels,
  };
};
