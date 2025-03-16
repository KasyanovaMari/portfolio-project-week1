import {S} from "./UsedSkills_Styles";
import * as React from "react";

type UsedSkillsPropsType = {
    skillsItems: Array<string>;
};

export const UsedSkills: React.FC<UsedSkillsPropsType> = (props: UsedSkillsPropsType) => {
    return (
        <S.UsedSkillsDiv>
            {props.skillsItems.map((skill, index) => (
                <S.SkillTablet key={index}>{skill}</S.SkillTablet>
            ))}
        </S.UsedSkillsDiv>
    );
};

