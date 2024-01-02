"use client"
import React, { useState, useEffect } from "react";
import ChatRoom from "@/app/_components/chatRoom/ChatRoom";
import styles from './page.module.scss';

const Chat: React.FC = () => {
  const [hasActiveChat, setHasActiveChat] = useState<boolean>(false);

  useEffect(() => {
    // Simulate checking if there is an active chat (you need to replace this with your actual logic)
    const checkActiveChat = () => {
      // Your logic to check if there's an active chat (e.g., checking a state, API call, etc.)
      // For the sake of this example, I'm using a setTimeout to simulate an asynchronous operation.
      setTimeout(() => {
        const isChatActive = false;
        setHasActiveChat(isChatActive);
      }, 1000); // Simulating a delay, replace with actual logic
    };

    checkActiveChat();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <section>
      <h1 className={styles.pageTitle}>
        {hasActiveChat
          ? "Chatta med din vårdcentral här"
          : "No active chat available"}
      </h1>
      {hasActiveChat && <ChatRoom />}
    </section>
  );
};

export default Chat;
