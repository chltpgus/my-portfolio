import styled from 'styled-components';
import { notoSansKrBold } from '@/styles/fonts/notoSans';
import { Row } from './container';

const Title = styled(Row)`
  font-size: 2rem;  
  border-left: 5px solid ${props => props.theme.colors.primary};
  ${notoSansKrBold.style};
`;

export default Title;