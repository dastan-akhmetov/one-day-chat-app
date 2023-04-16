import { createStyles } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles({
  wrapper: {},

  chooseUser: {
    marginBottom: "1rem",
  },

  chooseChannel: {},
});

type Props = {
  chooseUser: JSX.Element;
  chooseChannel: JSX.Element;
};

export const Sidebar: FC<Props> = ({ chooseUser, chooseChannel }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.chooseUser}>{chooseUser}</div>
      <div className={classes.chooseChannel}>{chooseChannel}</div>
    </div>
  );
};
