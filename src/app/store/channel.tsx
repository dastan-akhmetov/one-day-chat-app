import { createContext, useMemo, useState } from "react";
import { Channel } from "../domain/Channel";
import { ContextProvider } from "./types";

type ContextType = {
  channel: Channel;
  channels: Channel[];
  changeChannel: (channel: Channel) => void;
  setChannels: (channels: Channel[]) => void;
};

export const ChannelStoreContext = createContext<ContextType>(
  {} as ContextType
);

export const ChannelStoreContextProvider: ContextProvider = ({ children }) => {
  const [state, setState] = useState<Pick<ContextType, "channel" | "channels">>(
    {
      channel: "" as Channel,
      channels: [],
    }
  );

  const value = useMemo(() => {
    const changeChannel = (channel: Channel) => {
      setState({
        ...value,
        channel,
      });
    };

    const setChannels = (channels: Channel[]) => {
      setState({
        ...value,
        channels,
      });
    };

    return {
      ...state,
      changeChannel,
      setChannels,
    };
  }, [state]);

  return (
    <ChannelStoreContext.Provider value={{ ...value }}>
      {children}
    </ChannelStoreContext.Provider>
  );
};
