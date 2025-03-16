import { SectionTitle } from "../../../components/SectionTitle.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { Project } from "./project/Project.tsx";
import socialImg from "./../../../assets/images/project-image.webp";
import { Container } from "../../../components/Container.ts";
import {S} from "./Projects_Styles.ts";
import * as React from "react";

const projectData = [
    {
        title: "title project",
        src: socialImg,
        text:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }, {
        title: "insightgram",
        src: socialImg,
        text:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
];

const skills1 = ["JavaScript", "React", "TypeScript"];
const skills2 = ["React Native", "JavaScript"];

export const Projects: React.FC = () => {
    return (
        <S.Projects id="projects">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify={"center"} gap={"27px"} wrap={'wrap'}>
                    {projectData.map((p, index) => (
                        <Project
                            key={index}
                            title={p.title}
                            src={p.src}
                            text={p.text}
                            skills={index % 2 === 0 ? skills1 : skills2}
                        />
                    ))}
                </FlexWrapper>
                <S.SeeAllButton>See All Projects</S.SeeAllButton>
            </Container>
        </S.Projects>
    );
};
