import { create } from "zustand";

type QHSEModalState = {
  isOpen: boolean;
  modalId: string | null;
  open: (modalId: string) => void;
  close: () => void;
};

export const useQHSEModal = create<QHSEModalState>((set) => ({
  isOpen: false,
  modalId: null,
  open: (modalId) => set({ isOpen: true, modalId }),
  close: () => set({ isOpen: false, modalId: null }),
}));
