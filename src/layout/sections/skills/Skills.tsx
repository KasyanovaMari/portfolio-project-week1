import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} gap={'150px'}>
                    <Skill iconId={'html'} title={'HTML5'}/>
                    <Skill iconId={'css'} title={'CSS3'}/>
                    <Skill iconId={'react'} title={'React'}/>
                    <Skill iconId={'javascript'} title={'Javascript'}/>
                    <Skill iconId={'figma'} title={'Figma'}/>
                    <Skill iconId={'git'} title={'Git'}/>
                    <Skill iconId={'typescript'} title={'Typescript'}/>
                    <Skill iconId={'styled-components'} title={'Styled components'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`;