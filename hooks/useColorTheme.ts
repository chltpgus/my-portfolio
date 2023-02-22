import { darkColors, lightColors } from '@/styles/theme';
import { useColorTheme as useColorThemeState } from '@/store/useColorThemeStore';

export default function useColorTheme() {
    const { colorTheme } = useColorThemeState();
    return colorTheme === 'light' ? lightColors : darkColors;
}
