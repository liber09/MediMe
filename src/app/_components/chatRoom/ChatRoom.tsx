"use client"
import React, { useState, useEffect } from 'react';
import MessageList from '../messageList/MessageList';
import ChatInput from '../chatInput/ChatInput';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

interface Message {
  text: string;
  timestamp: string;
}

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('message', (message: Message) => {
      console.log('Received message:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = (text: string) => {
    const message: Message = { text, timestamp: new Date().toISOString() };
    socket.emit('message', message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <section>
      <MessageList messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </section>
  );
};

export default ChatRoom;
