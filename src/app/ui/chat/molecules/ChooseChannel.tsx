import { createStyles, rem, Select } from "@mantine/core";
import { FC } from "react";
import { Channel } from "../../../domain/Channel";

import { useChannelList } from "../hooks/useChannelList";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

export const ChooseChannel: FC = () => {
  const { classes } = useStyles();
  const { channels, changeChannel } = useChannelList();

  const onChange = (value: Channel) => {
    changeChannel(value);
  };

  return (
    <div>
      <Select
        mt="md"
        withinPortal
        data={channels}
        placeholder="Current user"
        label="2. Choose your channel"
        classNames={classes}
        onChange={onChange}
      />
    </div>
  );
};
