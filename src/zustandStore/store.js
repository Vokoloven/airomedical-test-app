import { create } from 'zustand';

export const useBeerStore = create((set) => ({
    data: [],
    loading: { status: 'idle', errorMessage: '' },
    setLoading: (status) => set({ loading: { ...status } }),
    setData: (data) => set({ data: [...data] }),
    isActiveButton: false,
    setActiveButton: (state) => set({ isActiveButton: state }),
    selectedRecipes: [],
    setSelectedRecipes: (recipes) => set({ selectedRecipes: [...recipes] }),
    deletedRecipes: [],
    setDeletedRecipes: (recipes) => set({ deletedRecipes: [...recipes] }),
    setUpdateData: () =>
        set((state) => ({
            data: [...state.selectedRecipes],
            deletedRecipes: [],
        })),
}));
