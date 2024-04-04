'use client'
import config from "./utils2/config.jsx";
import MessageParser from "./utils2/MessageParser.jsx";
import ActionProvider from "./utils2/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
const ChatBot= () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
export default ChatBot