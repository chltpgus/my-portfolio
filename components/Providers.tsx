import React from "react";
import {
  darkColors,
  lightColors,
  deviceSize,
  rootFontSize,
} from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { StyledEngineProvider } from '@mui/material/styles';

import { useColorTheme } from "store/useColorThemeStore";

interface ProvidersProps {
  children: React.ReactNode;
}

export interface ThemeType {
  colors: {
    backgroundColor: string;
    textColor: string;
    white: string;
    black: string;
    primaryLight: string;
    primary: string;
  };
  deviceSize: {
    mobile: number;
    tablet: number;
    laptop: number;
  };
  rootFontSize: number;
}

const Providers = ({ children }: ProvidersProps) => {
  const { colorTheme } = useColorTheme();
  const colors = colorTheme === "light" ? lightColors : darkColors;
  const theme: ThemeType = {
    colors,
    deviceSize,
    rootFontSize,
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );

};

export default Providers;
