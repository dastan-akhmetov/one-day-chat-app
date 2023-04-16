import { Chat } from "../../chat/pages/Chat";
import { Subtitle } from "../atoms/Subtitle";
import { Title } from "../atoms/Title";
import { MainPageTemplate } from "../templates/MainPageTemplate";

export const MainPage = () => {
  return (
    <MainPageTemplate
      title={<Title />}
      subtitle={<Subtitle />}
      chat={<Chat />}
    />
  );
};
