import { createStyles, Loader as UiLoader, LoaderProps } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = LoaderProps & {};

export const Loader: FC<Props> = (props) => {
  const { classes } = useStyles();
  const { ...uiProps } = props;

  return (
    <div className={classes.root}>
      <UiLoader {...uiProps} />
      <p>Loading...</p>
    </div>
  );
};
