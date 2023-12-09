import React from "react"
import ChatRoom from "@/app/_components/chatRoom/ChatRoom";
import styles from './page.module.scss'

const Chat: React.FC = () => (
    <div>
      <h1>Chatta med din vårdcentral här</h1>
      <ChatRoom />
    </div>
);
  
export default Chat;