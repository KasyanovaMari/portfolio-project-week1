import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'gmail'} width='50' height='50' viewBox={"0 0 45 45"}/>
                            gmail
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'instagram'} width='50' height='50' viewBox={"0 0 40 40"}/>
                            instagram
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'telegram'} width='50' height='50' viewBox={"0 0 45 45"}/>
                            telegram
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
            <FooterLinkWrapper>
                <LinksList>
                    <ContactLinkItem>
                        <MyPageLink href="#">Projects</MyPageLink>
                    </ContactLinkItem>
                    <ContactLinkItem>
                        <MyPageLink href="#">Contact</MyPageLink>
                    </ContactLinkItem>
                </LinksList>
            </FooterLinkWrapper>
            <FooterMyInfo>web developer 2025</FooterMyInfo>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding-top: 50px;
    padding-bottom: 100px;


`
const SocialList = styled.ul`
    display: flex;
    gap: 77px;
`

const SocialItem = styled.li`
    &:nth-child(1) {
        transform: translateY(2px);
    }

    &:nth-child(2) {
        transform: translateY(1px);
`

const SocialLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    transform: translateX(+25px)

`

const FooterLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 49px 0;
`
const LinksList = styled.ul`
    display: flex;
    gap: 48px
`
const ContactLinkItem = styled.li`

`
const MyPageLink = styled.a`
    &:hover {
        color: ${theme.colors.accent};
    }
`

const FooterMyInfo = styled.span`
    display: block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1.85714;
    letter-spacing: 0.04em;
    color: ${theme.colors.font}
`
