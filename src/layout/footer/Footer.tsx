import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'gmail'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'telegram'}/>
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
    min-height: 50vh;

`
const SocialList = styled.ul`
    display: flex;
    gap: 73px;
`

const SocialItem = styled.li`

`
const SocialLink = styled.a`
    
`

const FooterLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const LinksList = styled.ul`
    display: flex;
    gap: 50px
`
const ContactLinkItem = styled.li`

`
const MyPageLink = styled.a`
`

const FooterMyInfo = styled.span`
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 50px;
`
