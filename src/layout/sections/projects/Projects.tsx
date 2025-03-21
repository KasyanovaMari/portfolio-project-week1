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
        skills: ["JavaScript", "React", "TypeScript"],
        text:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }, {
        title: "insightgram",
        src: socialImg,
        skills: ["React Native", "JavaScript"],
        text:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        title: "title project",
        src: socialImg,
        skills: ["JavaScript", "React", "TypeScript"],
        text:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }, {
        title: "insightgram",
        src: socialImg,
        skills: ["React Native", "JavaScript"],
        text:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
];

export const Projects: React.FC = () => {
    const [showAll, setShowAll] = React.useState(false);

    const handleSeeAllClick = () => {
        setShowAll(true);
    };

    const handleHideClick = () => {
        setShowAll(false);
    };

    const projectsToShow = showAll ? projectData : projectData.slice(0, 2);

    return (
        <S.Projects id="projects">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify={"center"} gap={"27px"} wrap={'wrap'}>
                    {projectsToShow.map((p, index) => (
                        <Project
                            key={index}
                            title={p.title}
                            src={p.src}
                            text={p.text}
                            skills={p.skills}
                        />
                    ))}
                </FlexWrapper>
                {projectData.length > 2 && (
                    showAll ? (
                        <S.SeeAllButton onClick={handleHideClick}>Hide Projects</S.SeeAllButton>
                    ) : (
                        <S.SeeAllButton onClick={handleSeeAllClick}>See All Projects</S.SeeAllButton>
                    )
                )}
            </Container>
        </S.Projects>
    );
};