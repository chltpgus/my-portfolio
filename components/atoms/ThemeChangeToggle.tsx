import styled from 'styled-components';
import { motion } from "framer-motion";

import { useColorTheme } from '@/store/useColorTheme';

interface ThemeChangeToggleProps {

}

const ThemeChangeToggle = (props: ThemeChangeToggleProps) => {
  const { colorTheme, changeColorTheme } = useColorTheme();
  return <Switch onClick={changeColorTheme} isToggle={colorTheme === 'light'}>
    <Circle layout />
  </Switch>
};

export default ThemeChangeToggle;

const Switch = styled.button<{ isToggle: boolean }>`
  display:flex;
  padding: 6px;
  width: 64px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 100px;
  justify-content: ${props => props.isToggle ? 'flex-start' : 'flex-end'}
`;

const Circle = styled(motion.div)`
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.colors.textColor};
  border-radius: 50%;
`;
