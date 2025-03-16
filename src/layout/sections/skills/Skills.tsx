import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles";

const skillData = [
    {
        iconId: 'html',
        title: 'HTML5',
    }, {
        iconId: 'css',
        title: 'CSS3',
    }, {
        iconId: 'react',
        title: 'React',
    }, {
        iconId: 'javascript',
        title: 'Javascript',
    }, {
        iconId: 'figma',
        title: 'Figma',
    }, {
        iconId: 'git',
        title: 'Git',
    }, {
        iconId: 'typescript',
        title: 'Typescript',
    }, {
        iconId: 'styled-components',
        title: 'Styled components',
    },
]

export const Skills = () => {
    return (
        <S.Skills id="skills">
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-around'} gap={'160px'} align={'center'}>

                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
