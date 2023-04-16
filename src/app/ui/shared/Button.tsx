import { FC } from "react";
import { Button as UiButton } from "@mantine/core";

type Props = {
  children: React.ReactNode;
  icon?: JSX.Element;
  onClick?: () => void;
  loading?: boolean;
};

export const Button: FC<Props> = ({ children, icon, onClick, loading }) => {
  return (
    <UiButton onClick={onClick} rightIcon={icon} loading={loading}>
      {children}
    </UiButton>
  );
};
