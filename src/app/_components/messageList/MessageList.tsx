import React from 'react';

interface Message {
  text: string;
  timestamp: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
  <ul>
    {messages.map((message, index) => (
      <li key={index}>{message.text}</li>
    ))}
  </ul>
);

export default MessageList;
