import { User } from "./User";

export type Message = {
  messageId: string;
  text: string;
  datetime: string;
  userId: User;
};

export type MessageStatus = "Sent" | "Error";

export type UiMessage = Message & {
  status: MessageStatus;
};
