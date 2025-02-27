import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import socialImg from './../../../assets/images/project-image.webp'

const projectItems = ["All", "Landing page", "React", "SPA"]

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Menu menuItems={projectItems}/>
            <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                <Project title={'TITLE PROJECT'}
                         src={socialImg}
                         text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
                <Project title={'I N S I G H T G R A M'}
                         src={socialImg}
                         text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
                <Project title={'TITLE PROJECT'}
                         src={socialImg}
                         text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
                <Project title={'I N S I G H T G R A M'}
                         src={socialImg}
                         text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #ffd9e8;
    width: 100%;

`
