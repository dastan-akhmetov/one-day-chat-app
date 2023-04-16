import { FC } from "react";
import { Button } from "../../shared/Button";
import { useReadMore } from "../hooks/useReadMore";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";
import React from "react";

export const ReadOlder: FC = React.memo(() => {
  const { fetchOlder, loading } = useReadMore();

  return (
    <Button
      icon={<IconArrowUp size={16} />}
      onClick={fetchOlder}
      loading={loading}
    >
      Read More
    </Button>
  );
});

export const ReadNewer: FC = React.memo(() => {
  const { fetchNewer, loading } = useReadMore();
  return (
    <Button
      icon={<IconArrowDown size={16} />}
      onClick={fetchNewer}
      loading={loading}
    >
      Read More
    </Button>
  );
});
