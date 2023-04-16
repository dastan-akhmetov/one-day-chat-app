import { ChatTemplate } from "../templates/ChatTemplate";
import { Sidebar } from "../organisms/Sidebar";
import { Main } from "../organisms/main";
import { ChooseUser } from "../molecules/ChooseUser";
import { ChooseChannel } from "../molecules/ChooseChannel";
import { Head } from "../organisms/main/Head";
import { Body } from "../organisms/main/Body";
import { Send } from "../organisms/main/Send";
import { ReadNewer, ReadOlder } from "../atoms/ReadMore";
import { MessageList } from "../organisms/main/MessageList";

export const Chat = () => {
  return (
    <ChatTemplate
      sidebar={
        <Sidebar
          chooseUser={<ChooseUser />}
          chooseChannel={<ChooseChannel />}
        />
      }
      main={
        <Main
          head={<Head />}
          body={
            <Body
              readOldest={<ReadOlder />}
              messages={<MessageList />}
              readLatest={<ReadNewer />}
              send={<Send />}
            />
          }
        />
      }
    />
  );
};
