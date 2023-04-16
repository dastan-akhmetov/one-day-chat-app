import { FC } from "react";
import { ErrorBoundary } from "../../shared/ErrorBoundary";

type Props = {
  value: string;
};

export const MessageTime: FC<Props> = ({ value }) => {
  const intl = Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const formatted = intl.format(new Date(value));

  return (
    <ErrorBoundary fallback={<span>Time Error</span>}>
      <div>{formatted}</div>
    </ErrorBoundary>
  );
};
