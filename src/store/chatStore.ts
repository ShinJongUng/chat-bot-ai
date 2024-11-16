import {create} from "zustand";

interface ChatState {
  currentQuestion: string;
  setCurrentQuestion: (question: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  currentQuestion: "",
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
}));