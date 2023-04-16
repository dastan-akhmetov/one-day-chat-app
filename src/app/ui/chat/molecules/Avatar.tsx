import { FC } from "react";
import { Avatar as AvatarShared } from "../../shared/Avatar";

type Props = {
  url: string;
  name: string;
};

export const Avatar: FC<Props> = ({ url, name }) => {
  return (
    <div>
      <div>
        <AvatarShared src={url} />
      </div>
      <div>{name}</div>
    </div>
  );
};
