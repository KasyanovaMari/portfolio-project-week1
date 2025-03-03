import styled from "styled-components";
import { theme } from "../../../../styles/Theme.ts";
import { UsedSkills } from "../usedSkills/UsedSkills.tsx";

type ProjectPropTypes = {
    title: string;
    text: string;
    src: string;
    skills: string[]; // Добавляем массив навыков
};

export const Project = (props: ProjectPropTypes) => {
    return (
        <StyledProject>
            <Image src={props.src} alt="" />
            <Description>
            <Title>{props.title}</Title>
            <UsedSkills skillsItems={props.skills} />
            <Text>{props.text}</Text>
            </Description>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 522px;
    min-height: 636px;
    border-radius: 6px;
    box-shadow: 2px 2px 32px 0 rgba(40, 38, 44, 0.15);
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 6px;
`;

const Title = styled.h3`
    font-size: 20px;
    padding-top: 30px;
`;

const Text = styled.p`
    color: ${theme.colors.font};
    text-align: left;
`;

const Description = styled.h3`
    padding-left: 20px;    
`