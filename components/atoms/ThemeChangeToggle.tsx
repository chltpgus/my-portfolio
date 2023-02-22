import styled from 'styled-components';
import { motion } from "framer-motion";

import { useColorTheme } from '@/store/useColorThemeStore';

interface ThemeChangeToggleProps {

}

const ThemeChangeToggle = (props: ThemeChangeToggleProps) => {
  const { colorTheme, changeColorTheme } = useColorTheme();
  const animation = {
    initial: {
      left: "6px",
      right: ""
    },
    animate: {
      left: colorTheme === 'light' ? "6px" : "",
      right: colorTheme === 'light' ? "" : "6px"
    },
    transition: { duration: 0.2, delay: 1 * 0.2 }
  }
  return (
    <Switch onClick={changeColorTheme} >
      <Circle {...animation} />
    </Switch>
  );
};

export default ThemeChangeToggle;

const Switch = styled.button`
  position: relative;
  display:flex;
  padding: 6px;
  width: 64px;
  min-height: 36px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 100px;
`;

const Circle = styled(motion.div)`
  position: absolute;
  top: 6px;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.colors.textColor};
  border-radius: 50%;
`;
