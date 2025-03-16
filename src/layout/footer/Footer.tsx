import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {S} from "./Footer_Styles";
import * as React from "react";

const socialItemsData = [
    {
        iconId: 'gmail',
        linkTitle: 'Gmail',
    },
    {
        iconId: 'instagram',
        linkTitle: 'Instagram',
    },
    {
        iconId: 'telegram',
        linkTitle: 'Telegram',
    },
]

const socialLinksData = [
    {
        linkName: 'Projects',
        linkHref: '#projects'
    },
    {
        linkName: 'Contact',
        linkHref: '#contact-form'
    }
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.SocialList>
                    {socialItemsData.map((s, index) => {
                        return (<S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon height='45' width='45' viewBox={"0 0 45 45"} iconId={s.iconId}/>
                                <a>{s.linkTitle}</a>
                            </S.SocialLink>
                        </S.SocialItem>)
                    })}
                </S.SocialList>
            </FlexWrapper>
            <S.FooterLinkWrapper>
                <S.LinksList>
                    {socialLinksData.map((l, index) => {
                        return (<S.ContactLinkItem key={index}>
                            <S.MyPageLink href={l.linkHref}>{l.linkName}</S.MyPageLink>
                        </S.ContactLinkItem>)
                    })}
                </S.LinksList>
            </S.FooterLinkWrapper>
            <S.FooterMyInfo>web developer 2025</S.FooterMyInfo>
        </S.Footer>
    );
};

