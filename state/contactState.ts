import { messageData } from "@/data/contactData";
import { create } from "zustand";

export interface MessageInterface {
  id?: number;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const contactState = create((set) => ({
  message: null,
  messageForm: { name: "", email: "", phone: "", message: "" },
  setMessage: (key: string, value: string) => {
    set((state) => ({
      messageForm: { ...state.messageForm, [key]: value },
    }));
  },
  saveMessage: (msgs: MessageInterface) => {
    const messageData = messageData;
    const newMessage = {
      id: messageData.length + 1,
      ...msgs,
    };
    messageData.push(newMessage);
    set(() => ({ message: messageData }));
  },
  getMessage: () => {
    const message = readFileSync("./data/contactData.json", "utf-8");
    set(() => ({ message: JSON.parse(message) }));
  },
}));
