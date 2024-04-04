'use client'
import config from "./utils2/config.jsx";
import MessageParser from "./utils2/MessageParser.jsx";
import ActionProvider from "./utils2/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import './chat-bot.css'
const ChatBot= ({closeBot}) => {
  return (
    <div className="chat-bot">
      <span class="material-symbols-outlined" onClick={closeBot}>
close
</span>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
export default ChatBot