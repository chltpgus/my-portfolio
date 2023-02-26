import styled from 'styled-components';

import { maxWidth } from '@/styles/theme';

interface ContainerProps {
  backgroundColor?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${props => props?.backgroundColor ? props?.backgroundColor : ''};
  max-width : ${maxWidth}px;
  z-index:1;
`;

export default Container;