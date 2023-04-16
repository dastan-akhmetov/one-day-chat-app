import { createStyles, rem, Select } from "@mantine/core";
import { FC } from "react";
import { User } from "../../../domain/User";
import { useUserList } from "../hooks/useUserList";

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

export const ChooseUser: FC = () => {
  const { classes } = useStyles();
  const { users, user, changeUser } = useUserList();

  const onChange = (value: string) => {
    changeUser(value as User);
  };

  return (
    <div>
      <Select
        mt="md"
        withinPortal
        data={users}
        placeholder="Current user"
        label="1. Choose your user"
        classNames={classes}
        onChange={onChange}
        value={user}
      />
    </div>
  );
};
