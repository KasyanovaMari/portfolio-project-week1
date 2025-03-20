import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

const Header = styled.header`
    height: 100px;
    position: relative;

`;

const LeftMenu = styled.div`
    display: flex;

    @media ${theme.media.mobile} {
        padding-right: 20px;
    }
`;
const HiddenTitle = styled.h1`
    display: none;
`
const RightMenu = styled.div`
    display: flex;
    gap: 87px;
    align-items: center;

    @media ${theme.media.mobile} {
        gap: 20px;
    }
`;

const NavLink = styled(Link)`
    color: ${theme.colors.font};
    text-decoration: none;
    font-size: 16px;
    padding-top: 25px;
`;

const NavButtonLink = styled(Link)`
    display: block;
    padding: 12px 20px;
    background-color: ${theme.colors.accent};
    border-radius: 6px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    margin-top: 20px;

    &:hover {
        background-color: ${theme.colors.buttonHover};
        color: white;
    }

    &:visited {
        color: white;
    }
`;

export const S = {
    Header,
    LeftMenu,
    HiddenTitle,
    RightMenu,
    NavLink,
    NavButtonLink
};