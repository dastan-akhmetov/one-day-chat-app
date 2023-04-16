import { FC } from "react";
import { Avatar } from "../../molecules/Avatar";

import { useStyles } from "./MessageItem.styles";

import { MessageTime } from "../../atoms/MessageTime";
import { User } from "../../../../domain/User";
import { useMessageItem } from "../../hooks/useMessageItem";
import { UiMessage } from "../../../../domain/Message";
import { IconCircleCheck, IconExclamationCircle } from "@tabler/icons-react";

type Props = UiMessage;

export const MessageItem: FC<Props> = ({ userId, text, datetime, status }) => {
  const { classes } = useStyles();
  const { getAvatarUrl, user } = useMessageItem();

  return (
    <div className={classes.wrapper} data-user-message={user === userId}>
      <div className={classes.avatar}>
        <Avatar url={getAvatarUrl(userId as User)} name={userId} />
      </div>
      <div className={classes.text}>{text}</div>
      <div className={classes.time}>
        <MessageTime value={datetime} />
      </div>
      <div className={classes.status} data-status={status?.toLowerCase()}>
        {status}
        {status === "Sent" && <IconCircleCheck />}
        {status === "Error" && <IconExclamationCircle />}
      </div>
    </div>
  );
};
