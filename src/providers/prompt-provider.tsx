"use client";

import { Message, MessagesContext } from "@/context/MessagesContext";
import { useState } from "react";

interface PromptUserProviderProps {
  children: React.ReactNode;
}

const PromptUserProvider = ({ children }: PromptUserProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export default PromptUserProvider;
