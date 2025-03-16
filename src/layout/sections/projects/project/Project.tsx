import {S} from "./../Projects_Styles";
import * as React from "react";
import {UsedSkills} from "./../usedSkills/UsedSkills.tsx";

type ProjectPropTypes = {
    title: string;
    text: string;
    src: string;
    skills: string[];
};

export const Project: React.FC<ProjectPropTypes> = (props: ProjectPropTypes) => {
    return (
        <S.Project>
            <S.Image src={props.src} alt="Project Image"/>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <UsedSkills skillsItems={props.skills}/>
                <S.Text>{props.text}</S.Text>
            </S.Description>
        </S.Project>
    );
};

