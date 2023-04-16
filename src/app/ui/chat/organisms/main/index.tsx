import { FC } from "react";

import { createStyles } from "@mantine/core";

const useStyles = createStyles({
  wrapper: {},

  head: {
    borderBottom: "1px solid #e6ecf3",
    padding: "0 15px",
    minHeight: "64px",
    lineHeight: "64px",
  },

  body: {
    padding: "1rem",
  },
});

type Props = {
  head: JSX.Element;
  body: JSX.Element;
};

export const Main: FC<Props> = ({ head, body }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.head}>{head}</div>
      <div className={classes.body}>{body}</div>
    </div>
  );
};
