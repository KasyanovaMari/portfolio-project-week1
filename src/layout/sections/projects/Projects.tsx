import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import socialImg from './../../../assets/images/project-image.webp'
import {theme} from "../../../styles/Theme.ts";


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper justify={'space-around'} wrap={'wrap'}>
                <Project title={'TITLE PROJECT'}
                         src={socialImg}
                         text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
                <Project title={'I N S I G H T G R A M'}
                         src={socialImg}
                         text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
            </FlexWrapper>
            <SeeAllButton>See All Projects</SeeAllButton>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    width: 100%;

`

const SeeAllButton = styled.button`
    display: block;
    margin: 40px auto;
    background-color: ${theme.colors.accent};
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    width: 305px;
    height: 56px;

    &:hover {
        background-color: #9a5a9f;
    }
`;
