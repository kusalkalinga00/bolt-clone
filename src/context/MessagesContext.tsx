import { createContext } from "react";

export interface Message {
  role: string;
  content: string;
}

interface MessagesContextProps {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const MessagesContext = createContext<MessagesContextProps>(
  {} as MessagesContextProps
);
