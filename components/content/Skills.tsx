import styled from 'styled-components';
import Image from 'next/image';

import useColorTheme from '@/hooks/useColorTheme';

import Title from '../Title';
import { Row } from "../container";

const AboutMe = () => {
  const colors = useColorTheme();
  return (
    <>
      <Row marginTop={67} />
      <Title marginTop={32} marginBottom={48} color={colors.white}>&nbsp;Skills</Title>
      <Card>
        <Row fontSize={2} fontFamily='notoSansKrBold' color={colors.primary}>
          Frontend
        </Row>
        <ImageWrapper width={239} height={80}>
          <Image
            fill
            src={
              "/images/skills/reactLogo.png"
            }
            alt="reactLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={134} height={80}>
          <Image
            fill
            src={
              "/images/skills/nextJsLogo.png"
            }
            alt="nextJsLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={80} height={80}>
          <Image
            fill
            src={
              "/images/skills/styledComponentsLogo.png"
            }
            alt="nextJsLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={138} height={80}>  1526 886
          <Image
            fill
            src={
              "/images/skills/reactQueryLogo.png"
            }
            alt="reactQueryLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={110} height={80}>
          <Image
            fill
            src={
              "/images/skills/zustandLogo.png"
            }
            alt="zustandLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={200} height={50}>
          <Image
            fill
            src={
              "/images/skills/typescriptLogo.png"
            }
            alt="typescriptLogo"
          />
        </ImageWrapper>

        <Row fontSize={2} fontFamily='notoSansKrBold' color={colors.primary} marginTop={32}>
          Deployment
        </Row>
        <ImageWrapper width={130} height={80}>
          <Image
            fill
            src={
              "/images/skills/awsLogo.png"
            }
            alt="awsLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={100} height={80}>
          <Image
            fill
            src={
              "/images/skills/s3Logo.png"
            }
            alt="s3Logo"
          />
        </ImageWrapper>
        <ImageWrapper width={130} height={80}>
          <Image
            fill
            src={
              "/images/skills/cloudfrontLogo.jpg"
            }
            alt="cloudfrontLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={150} height={40}>
          <Image
            fill
            src={
              "/images/skills/amplifyLogo.png"
            }
            alt="amplifyLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={150} height={40}>
          <Image
            fill
            src={
              "/images/skills/netlifyLogo.png"
            }
            alt="netlifyLogo"
          />
        </ImageWrapper>

        <Row fontSize={2} fontFamily='notoSansKrBold' color={colors.primary} marginTop={32}>
          Other
        </Row>
        <ImageWrapper width={80} height={80}>
          <Image
            fill
            src={
              "/images/skills/gitLogo.png"
            }
            alt="gitLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={100} height={80}>
          <Image
            fill
            src={
              "/images/skills/githubLogo.png"
            }
            alt="githubLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={160} height={40}>
          <Image
            fill
            src={
              "/images/skills/slackLogo.png"
            }
            alt="slackLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={180} height={30}>
          <Image
            fill
            src={
              "/images/skills/jandiLogo.jpg"
            }
            alt="jandiLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={160} height={50}>
          <Image
            fill
            src={
              "/images/skills/jiraLogo.png"
            }
            alt="jiraLogo"
          />
        </ImageWrapper>
        <ImageWrapper width={180} height={55}>
          <Image
            fill
            src={
              "/images/skills/notionLogo.png"
            }
            alt="notionLogo"
          />
        </ImageWrapper>
      </Card>
      <Row marginBottom={100} />
    </>
  );
};

export default AboutMe;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`;

const ImageWrapper = styled.div<{ width: number; height: number }>`
  position: relative;
  width:${props => props.width}px;
  height:${props => props.height}px;
`;

const Card = styled(Row)`
  background-color: ${props => props.theme.colors.white};
  padding: 48px;
  border-radius: 8px;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.black};
  gap: 32px;
`;