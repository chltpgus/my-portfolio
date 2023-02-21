import styled from 'styled-components';

import { maxWidth } from '@/styles/theme';
import { notoSansKrBold } from '@/styles/fonts/notoSans';
import { Link } from 'react-scroll';
import ThemeChangeToggle from '@/components/atoms/ThemeChangeToggle';


const Nav = () => {
    return <NavStyle.Nav>
        <NavStyle.Container>
            <NavStyle.LogoWrapper>
                Hyeon
            </NavStyle.LogoWrapper>
            <NavStyle.LinkContainer>
                <NavStyle.Link to="background">
                    Background
                </NavStyle.Link>
                <NavStyle.Link to="skills">
                    Skills
                </NavStyle.Link>
                <NavStyle.Link to="projects">
                    Projects
                </NavStyle.Link>
                <NavStyle.Link to="projects">
                    Career
                </NavStyle.Link>
                <ThemeChangeToggle />
            </NavStyle.LinkContainer>
        </NavStyle.Container>
    </NavStyle.Nav>
};

export default Nav;

const NavStyle = {
    Nav: styled.nav`
        position: sticky;
        display: flex;
        width: 100%;
        justify-content: center;
        box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.12);
    `,
    Container: styled.div`
        display: flex;
        width: 100%;
        max-width: ${maxWidth}px;
        justify-content: space-between;
        padding : 16px;
        ${notoSansKrBold.style};
    `,
    LogoWrapper: styled.div`
        display: flex;
        font-size: 1.5rem;
        align-items: center;
    `,
    LinkContainer: styled.ul`
        display: flex;
        gap: 24px;
    `,
    Link: styled(Link)`
        height:100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        :hover{
            opacity:0.7;
        }
    `
}