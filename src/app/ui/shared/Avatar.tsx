import { FC } from "react";
import { Avatar as UiAvatar } from "@mantine/core";

type Props = {
  src: string;
};

export const Avatar: FC<Props> = ({ src }) => {
  return <UiAvatar size={48} src={src} radius={48} />;
};
