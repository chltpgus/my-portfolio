import { useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

import { maxWidth, deviceSize } from '@/styles/theme';
import media from '@/styles/mediaQuery';
import { notoSansKrBold } from '@/styles/fonts/notoSans';
import { Link } from 'react-scroll';
import useMaxSize from '@/hooks/useMaxSize';
import useColorTheme from '@/hooks/useColorTheme';
import { useNavMenu } from '@/store/useNavMenuStore';

import ThemeChangeToggle from '@/components/atoms/ThemeChangeToggle';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
    const { isMenu, setIsMenu } = useNavMenu();
    const isTablet = useMaxSize(deviceSize.tablet);
    const colors = useColorTheme();

    const animation = {
        initial: {
            opacity: 0,
            x: 50,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        transition: { duration: 0.2, delay: 1 * 0.2 }
    }

    return <NavStyle.NavContainer>
        <NavStyle.Nav>
            <Link to="information" spy={true} smooth={true}>
                <NavStyle.LogoWrapper>
                    Hyeon
                </NavStyle.LogoWrapper>
            </Link>
            <NavStyle.LinkContainer>
                {(isMenu || !isTablet) && (<>
                    <NavStyle.LinkWrapper {...animation}>
                        <NavStyle.Link to="aboutMe" spy={true} smooth={true}>
                            About Me
                        </NavStyle.Link>
                    </NavStyle.LinkWrapper>
                    <NavStyle.LinkWrapper {...animation}>
                        <NavStyle.Link to="skills" spy={true} smooth={true}>
                            Skills
                        </NavStyle.Link>
                    </NavStyle.LinkWrapper>
                    <NavStyle.LinkWrapper {...animation}>
                        <NavStyle.Link to="projects" spy={true} smooth={true}>
                            Projects
                        </NavStyle.Link>
                    </NavStyle.LinkWrapper>
                    <NavStyle.LinkWrapper {...animation}>
                        <NavStyle.Link to="projects" spy={true} smooth={true}>
                            Career
                        </NavStyle.Link>
                    </NavStyle.LinkWrapper>
                    <NavStyle.ToggleWrapper>
                        <ThemeChangeToggle />
                    </NavStyle.ToggleWrapper>
                </>)}
                {
                    isTablet &&
                    (<NavStyle.MenuWrapper onClick={() => setIsMenu(!isMenu)}>
                        <MenuIcon sx={{ color: colors.textColor }} fontSize="large" />
                    </NavStyle.MenuWrapper>)
                }
            </NavStyle.LinkContainer>
        </NavStyle.Nav>
    </NavStyle.NavContainer>
};

export default Nav;

const NavStyle = {
    NavContainer: styled.div`
        display: flex;
        position: fixed;
        top:0;
        width: 100%;
        justify-content: center;
        background-color: ${props => props.theme.colors.backgroundColor};
        box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.12);
        z-index: 2;
        ${notoSansKrBold.style};
    `,
    Nav: styled.nav`
        position: relative;
        display: flex;
        width: 100%;
        max-width: ${maxWidth}px;
        justify-content: space-between;
        padding : 16px;
        ${media.tablet}{
            flex-direction: column;
        }
    `,
    LogoWrapper: styled.div`
        display: flex;
        font-size: 1.5rem;
        align-items: center;
        cursor: pointer;
    `,
    LinkContainer: styled.ul`
        display: flex;
        gap: 24px;
        ${media.tablet}{
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
    `,
    Link: styled(Link)`
        height:100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        :hover{
            opacity:0.7;
        }
        ${media.tablet}{
            padding: 12px;
            border-radius: 8px;
            justify-content: center;
            width: 100%;
            :hover{
                opacity: 1;
                background-color: ${props => props.theme.colors.primary};
            }
        }
    `,
    LinkWrapper: styled(motion.div)`
        ${media.tablet}{
            width: 100%;
            :first-child{
                margin-top: 16px;
            }
        }
    `,
    ToggleWrapper: styled.div``,
    MenuWrapper: styled.button`
        position: absolute;
        padding: 16px 16px 0px 0px;
        right: 0;
        top: 0;
        :hover{
            opacity: 0.7;
        }
    `,
}