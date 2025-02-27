import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";

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
    width: 23%;
    background-color: rgba(233, 233, 233, 0.74);
    margin: 10px;
`;

const SkillTitle = styled.h3`
    color: #030303;
`;