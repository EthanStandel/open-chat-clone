import create from "zustand";

export type Store = {
  user?: {
    username: string;
  };
  setUser: (user: Store["user"]) => void;
};

export const useStore = create<Store>(set => ({
  user: undefined,
  setUser: user => {
    set({ user });
  },
}));
