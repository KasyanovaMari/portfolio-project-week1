import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Container} from "../../components/Container";
import * as React from "react";
import {S} from "./Header_Styles";

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <S.LeftMenu>
                        <S.NavLink href="/">Home</S.NavLink>
                        <S.HiddenTitle></S.HiddenTitle>
                    </S.LeftMenu>
                    <S.RightMenu>
                        <S.NavLink href="#projects">Projects</S.NavLink>
                        <S.NavLink href="#skills">Skills</S.NavLink>
                        <S.NavButton href="#contact-form">Contact</S.NavButton>
                    </S.RightMenu>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

