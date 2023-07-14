import { create } from 'zustand';

export const useBeerStore = create((set) => ({
    data: [],
    setData: (data) => set((state) => ({ data: [...state.data, ...data] })),
}));
