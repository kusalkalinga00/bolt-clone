import { createContext, Dispatch, SetStateAction } from "react";

interface Message {
  role: string;
  message: string;
}

interface MessagesContextType {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

export const MessagesContext = createContext<MessagesContextType>({
  messages: [],
  setMessages: () => {},
});
