import { FC, useContext } from "react";
import { ChannelStoreContext } from "../../../../store/channel";

type Props = {};

export const Head: FC<Props> = () => {
  const { channel } = useContext(ChannelStoreContext);

  return <div>{channel} Channel</div>;
};
