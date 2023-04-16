import { createStyles } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles({
  wrapper: {
    width: "80%",
    margin: "0 auto",
  },

  heading: {},

  title: {},

  subtitle: {},

  content: {},
});

type Props = {
  title: JSX.Element;
  subtitle: JSX.Element;
  chat: JSX.Element;
};

export const MainPageTemplate: FC<Props> = ({ title, subtitle, chat }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.heading}>
        <div className={classes.title}>{title}</div>
        <div className={classes.subtitle}>{subtitle}</div>
      </div>
      <div className={classes.content}>{chat}</div>
    </div>
  );
};
