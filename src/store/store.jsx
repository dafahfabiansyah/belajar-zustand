import { create } from 'zustand';

export const useAppStore = create((set) => ({
  count: 0,
  decrement: () => set((state) => ({ count: state.count - 1 })),
  increment: () => set((state) => ({ count: state.count + 1 })),

  username: '',
  updateUsername: (username) => set({ username }),
}));
