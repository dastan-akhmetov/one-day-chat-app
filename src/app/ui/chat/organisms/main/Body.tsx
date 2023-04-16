import { createStyles } from "@mantine/core";
import { FC } from "react";
import { Loader } from "../../../shared/Loader";
import { useBody } from "../../hooks/useBody";

const useStyles = createStyles({
  wrapper: {
    padding: "1rem",
    height: "400px",
    overflowY: "scroll",
  },

  readOldest: {
    marginBottom: "40px",
  },

  messages: {
    marginBottom: "40px",
  },

  readLatest: {},

  send: {},
});

type Props = {
  readOldest: JSX.Element;
  messages: JSX.Element;
  readLatest: JSX.Element;
  send: JSX.Element;
};

export const Body: FC<Props> = ({ readOldest, messages, readLatest, send }) => {
  const { classes } = useStyles();
  const { wrapperRef, messages: messageList, loading } = useBody();

  if (loading) return <Loader />;
  if (!messageList.length) return <div>No messages</div>;

  return (
    <div className={classes.wrapper} ref={wrapperRef}>
      <div className={classes.readOldest}>{readOldest}</div>
      <div className={classes.messages}>{messages}</div>
      <div className={classes.readLatest}>{readLatest}</div>
      <div className={classes.send}>{send}</div>
    </div>
  );
};
