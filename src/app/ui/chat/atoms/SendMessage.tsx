import { IconPlane, IconSend } from "@tabler/icons-react";
import { FC } from "react";
import { Button } from "../../shared/Button";

type Props = {
  onClick: () => void;
  loading: boolean;
};

export const SendMessage: FC<Props> = ({ onClick, loading }) => {
  return (
    <Button icon={<IconSend size={16} />} onClick={onClick} loading={loading}>
      Send Message
    </Button>
  );
};
