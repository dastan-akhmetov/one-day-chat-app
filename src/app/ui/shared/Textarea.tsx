import { createStyles } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles({
  textarea: {
    width: "100%",
    minHeight: "100px",
    padding: "15px",
  },
});

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const Textarea: FC<Props> = ({ value, onChange }) => {
  const { classes } = useStyles();
  return (
    <textarea
      className={classes.textarea}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  );
};
