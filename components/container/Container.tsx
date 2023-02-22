import styled from 'styled-components';

import { maxWidth } from '@/styles/theme';

interface ContainerProps {
  backgroundColor?: string;
}

const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props?.backgroundColor ? props?.backgroundColor : ''};
  max-width : ${maxWidth}px;
`;

export default Container;