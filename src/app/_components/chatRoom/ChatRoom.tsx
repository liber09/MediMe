"use client"
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessageList from '../messageList/MessageList';
import ChatInput from '../chatInput/ChatInput';

const socket = io('http://localhost:3001'); // Update with your server address

interface Message {
  text: string;
  timestamp: string;
}

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (text: string) => {
    const message: Message = { text, timestamp: new Date().toISOString() };
    socket.emit('message', message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;
