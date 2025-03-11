import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import socialImg from "./../../../assets/images/project-image.webp";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const Projects = () => {
    const skills1 = ["JavaScript", "React", "TypeScript"];
    const skills2 = ["React Native", "JavaScript"];

    return (
        <StyledProjects id="ancor">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper justify={"center"} gap={"27px"} wrap={'wrap'}>
                    <Project
                        title={"TITLE PROJECT"}
                        src={socialImg}
                        text={
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                        }
                        skills={skills1}
                    />
                    <Project
                        title={"I N S I G H T G R A M"}
                        src={socialImg}
                        text={
                            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                        }
                        skills={skills2}
                    />
                </FlexWrapper>
                <SeeAllButton>See All Projects</SeeAllButton>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`

`;

const SeeAllButton = styled.button`
    display: block;
    margin: 40px auto;
    background-color: ${theme.colors.accent};
    color: white;
    border-radius: 6px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    width: 305px;
    height: 56px;


    &:hover {
        background-color: #9a5a9f;
    }
`;