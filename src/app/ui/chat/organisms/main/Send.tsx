import { createStyles } from "@mantine/core";
import { FC, useContext } from "react";

import { TextStoreContext } from "../../../../store/text";
import { UserStoreContext } from "../../../../store/user";
import { Textarea } from "../../../shared/Textarea";
import { SendMessage } from "../../atoms/SendMessage";
import { useMessageItem } from "../../hooks/useMessageItem";

const useStyles = createStyles({
  wrapper: {
    marginTop: "1rem",
    paddingBottom: "1rem",
  },
});

export const Send: FC = () => {
  const { classes } = useStyles();
  const { user } = useContext(UserStoreContext);
  const { addText, text, removeText } = useContext(TextStoreContext);
  const { sendMessage, loading } = useMessageItem();

  const handleChange = (value: string) => {
    addText(user, value);
  };

  const handleClick = async () => {
    await sendMessage(text[user]);
    removeText(user);
  };

  return (
    <div className={classes.wrapper}>
      <div>
        <Textarea value={text[user]} onChange={handleChange} />
      </div>
      <div>
        <SendMessage onClick={handleClick} loading={loading} />
      </div>
    </div>
  );
};
