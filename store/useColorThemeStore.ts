import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ColorThemeType {
    colorTheme: 'dark' | 'light';
    changeColorTheme: () => void;
}

const useColorThemeStore = create(
    persist<ColorThemeType>(
        (set, get) => ({
            colorTheme: 'light',
            changeColorTheme: () =>
                set(() => ({
                    colorTheme: get().colorTheme === 'light' ? 'dark' : 'light',
                })),
        }),
        {
            name: 'userTakingPillList',
        }
    )
);

export const useColorTheme = () =>
    useColorThemeStore((state) => ({
        colorTheme: state.colorTheme,
        changeColorTheme: state.changeColorTheme,
    }));
