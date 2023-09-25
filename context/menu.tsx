import { create } from 'zustand';

export interface InitialModalState {
    isOpen: boolean;
    toggleMenu(): void;
}

export const useMenu = create<InitialModalState>()(set => ({
    isOpen: false,
    toggleMenu: () => set(prev => ({ isOpen: !prev.isOpen }))
}));