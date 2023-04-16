import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { UserStoreContextProvider } from "./app/store/user";
import { ChannelStoreContextProvider } from "./app/store/channel";
import { MessageStoreContextProvider } from "./app/store/message";
import { TextStoreContextProvider } from "./app/store/text";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserStoreContextProvider>
      <ChannelStoreContextProvider>
        <TextStoreContextProvider>
          <MessageStoreContextProvider>
            <MantineProvider withGlobalStyles withNormalizeCSS>
              <App />
            </MantineProvider>
          </MessageStoreContextProvider>
        </TextStoreContextProvider>
      </ChannelStoreContextProvider>
    </UserStoreContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
