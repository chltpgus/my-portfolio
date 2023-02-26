import styled from 'styled-components';

import useColorTheme from '@/hooks/useColorTheme';

import PhoneIcon from '@mui/icons-material/Phone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import Title from '../Title';
import { Row } from "../container";

const ContentComponent = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return <><b>{title}</b>&nbsp;{children}</>
}

const AboutMe = () => {
  const colors = useColorTheme();
  return (
    <>
      <Row marginTop={67} />
      <Title marginTop={32} marginBottom={48}>&nbsp;About Me</Title>
      <Container>
        <Content >
          <IconWrapper>
            <AccountBoxIcon sx={{ color: colors.textColor }} fontSize="medium" />
          </IconWrapper>
          <ContentComponent title="이름">
            최세현
          </ContentComponent>
        </Content>
        <Content >
          <IconWrapper>
            <PhoneIcon sx={{ color: colors.textColor }} fontSize="medium" />
          </IconWrapper>
          <ContentComponent title="연락처">
            010-4008-7601
          </ContentComponent>
        </Content>
        <Content >
          <IconWrapper>
            <CakeIcon sx={{ color: colors.textColor }} fontSize="medium" />
          </IconWrapper>
          <ContentComponent title="생년월일">
            98.10.21
          </ContentComponent>
        </Content>
        <Content >
          <IconWrapper>
            <AlternateEmailIcon sx={{ color: colors.textColor }} fontSize="medium" />
          </IconWrapper>
          <ContentComponent title="이메일">
            chltpgusg@gmail.com
          </ContentComponent>
        </Content>
        <Content >
          <IconWrapper>
            <LocationOnIcon sx={{ color: colors.textColor }} fontSize="medium" />
          </IconWrapper>
          <ContentComponent title="주소">
            서울특별시 구로구 개봉동
          </ContentComponent>
        </Content>
        <Content >
          <IconWrapper>
            <SchoolIcon sx={{ color: colors.textColor }} fontSize="medium" />
          </IconWrapper>
          <ContentComponent title="최종 학력">
            성결대학교 정보통신공학과 졸업
          </ContentComponent>
        </Content>
      </Container>
      <Row marginBottom={67} />
    </>
  );
};

export default AboutMe;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height:100%;
  padding-right: 12px;
`;

const Content = styled(Row)`
  width: calc(50% - 5px);
  min-width: 320px;
  margin-bottom: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`;