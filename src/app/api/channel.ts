import { Channel } from "../domain/Channel";

const fetchChannels = () => {
  return Promise.resolve(["General", "LGTM", "Technology"] as Channel[]);
};

const channelApi = {
  fetchChannels,
};

export default channelApi;
