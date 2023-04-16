import { createStyles } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles({
  wrapper: {
    backgroundColor: "#f4f5fb",
    display: "flex",
  },

  sidebar: {
    width: "30%",
    padding: "10px",
    borderRight: "1px solid #e6ecf3",
  },

  main: {
    width: "70%",
  },
});

type Props = {
  sidebar: JSX.Element;
  main: JSX.Element;
};

export const ChatTemplate: FC<Props> = ({ sidebar, main }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.sidebar}>{sidebar}</div>
      <div className={classes.main}>{main}</div>
    </div>
  );
};
