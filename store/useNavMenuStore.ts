import { create } from 'zustand';

interface NavMenuType {
    isMenu: boolean;
    setIsMenu: (isMenu: boolean) => void;
}

const useNavMenuStore = create<NavMenuType>((set, get) => ({
    isMenu: false,
    setIsMenu: (isMenu) => set({ isMenu }),
}));

export const useNavMenu = () =>
    useNavMenuStore((state) => ({
        isMenu: state.isMenu,
        setIsMenu: state.setIsMenu,
    }));
