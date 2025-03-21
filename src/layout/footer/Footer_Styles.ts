import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Link} from "react-scroll";

const Footer = styled.footer`
    
`;

const SocialList = styled.ul`
    display: flex;
    gap: 70px;
    position: relative;

    @media ${theme.media.mobile} {
        gap: 30px;
    }
`;

const SocialItem = styled.li`
`;

const SocialLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
`;

const FooterLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 49px 0;
`;

const LinksList = styled.ul`
    display: flex;
    gap: 48px;

`;

const ContactLinkItem = styled.li`
`;

const MyPageLink = styled(Link)`
`;

const FooterMyInfo = styled.small`
    display: block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1.85714;
    letter-spacing: 0.04em;
    color: ${theme.colors.font};
`;

export const S = {
    Footer,
    SocialList,
    SocialItem,
    SocialLink,
    FooterLinkWrapper,
    LinksList,
    ContactLinkItem,
    MyPageLink,
    FooterMyInfo
};