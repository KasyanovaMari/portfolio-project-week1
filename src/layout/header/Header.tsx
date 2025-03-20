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
                        <S.NavLink to="#" smooth={true}>Home</S.NavLink>
                        <S.HiddenTitle></S.HiddenTitle>
                    </S.LeftMenu>
                    <S.RightMenu>
                        <S.NavLink to="projects" smooth={true}>Projects</S.NavLink>
                        <S.NavLink to="skills" smooth={true}>Skills</S.NavLink>
                        <S.NavButtonLink to="contact-form" smooth={true}>Contact</S.NavButtonLink>
                    </S.RightMenu>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

