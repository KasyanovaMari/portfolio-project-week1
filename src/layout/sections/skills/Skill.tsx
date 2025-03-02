import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type SkillPropsType = {
    iconId: string,
    title: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width='100' height='100'/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 120px; 
    padding-top: 28px;
`;

const SkillTitle = styled.h3`
    color: ${theme.colors.font};
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-align: center;
    margin-top: 20px;
`;
