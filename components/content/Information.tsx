import styled from 'styled-components';

import { Row } from "../container";
import { useNavMenu } from "@/store/useNavMenuStore";

const Information = () => {
  const { isMenu } = useNavMenu();
  return (
    <>
      <Row paddingTop={67} tabletPaddingTop={isMenu ? 359 : 67} />
      <CenterRow marginTop={120} fontSize={3} fontFamily="notoSansKrBold">
        프론트엔드 개발자
      </CenterRow>
      <CenterRow fontSize={4} fontFamily="notoSansKrBold" marginBottom={24}>
        최세현
      </CenterRow>
      <ComplementaryLine marginBottom={32} />
      <CenterRow>
        <span>안녕하세요.&nbsp;</span>
        <span>주니어 프론트엔드 개발자 최세현입니다.</span>
      </CenterRow>
      <CenterRow marginBottom={120}>
        <span>새로운 것을 두려워하지 않고 도전하며,&nbsp;</span>
        <span>최선을 찾기 위해 노력하는 것이 저의 장점입니다.</span>
      </CenterRow>
    </>
  );
};

export default Information;

const CenterRow = styled(Row)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ComplementaryLine = styled(Row)`
  background-color: ${props => props.theme.colors.complementary};
  min-height: 5px;
  width: 30%;
`;