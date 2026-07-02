import create from 'zustand';

type Expression = 'happy' | 'sad' | 'thinking' | 'confused' | 'neutral';

interface AvatarState {
  expression: Expression;
  isSpeaking: boolean;
  isListening: boolean;
  setExpression: (expression: Expression) => void;
  setIsSpeaking: (isSpeaking: boolean) => void;
  setIsListening: (isListening: boolean) => void;
}

export const useAvatarStore = create<AvatarState>((set) => ({
  expression: 'neutral',
  isSpeaking: false,
  isListening: false,
  setExpression: (expression) => set({ expression }),
  setIsSpeaking: (isSpeaking) => set({ isSpeaking }),
  setIsListening: (isListening) => set({ isListening }),
}));
