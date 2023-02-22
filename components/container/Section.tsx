import styled from 'styled-components';

interface SectionProps {
  backgroundColor?: string;
  padding?: number;
}

const Section = styled.section<SectionProps>`
  display: flex;
  width: 100%;
  background-color: ${props => props?.backgroundColor ? props?.backgroundColor : ''};
  padding-left: ${props => props?.padding ? `${props.padding}px` : '16px'};
  padding-right: ${props => props?.padding ? `${props.padding}px` : '16px'};
  justify-content: center;
  align-items: center;
`;

export default Section;