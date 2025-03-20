import photo from '../../../assets/images/photo.webp';
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import * as React from "react";
import {S} from "./Main_Styles.ts";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'} marginBottom={'100px'}>
                    <S.LeftSideWrapper>
                        <S.MainTitle>
                            <p>Developer</p>
                            <Typewriter
                            options={{
                                strings: ['Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 150
                            }}
                        />
                        </S.MainTitle>

                        <S.Name>Maria Kasyanova</S.Name>
                        <S.LeftText>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                        </S.LeftText>
                        <S.StyledLink to="contact-form" smooth={true}>Contact me</S.StyledLink>
                    </S.LeftSideWrapper>
                    <S.RightSideWrapper>
                        <S.Photo src={photo} alt='Maria'/>
                    </S.RightSideWrapper>
                </FlexWrapper>
                <S.AboutMeTitle>About Me</S.AboutMeTitle>
                <S.ShortInfo id="about-me">
                    The long barrow was built on land previously inhabited in the Mesolithic period. It
                    consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet)
                    in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and
                    cremated human remains were placed within this chamber during the Neolithic period,
                    representing at least nine or ten individuals.
                </S.ShortInfo>
            </Container>
        </S.Main>
    );
};

