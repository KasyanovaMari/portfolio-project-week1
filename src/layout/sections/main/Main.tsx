
import photo from '../../../assets/images/photo.webp';
import { Icon } from "../../../components/icon/Icon.tsx";
import { Container } from "../../../components/Container.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import * as React from "react";
import {S} from "./Main_Styles.ts";

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'} marginBottom={'300px'}>
                    <S.LeftSideWrapper>
                        <S.MainTitle>Developer</S.MainTitle>
                        <S.Name>Maria Kasyanova</S.Name>
                        <S.LeftText>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                        </S.LeftText>
                        <S.StyledButton>Contact me</S.StyledButton>
                    </S.LeftSideWrapper>
                    <S.RightSideWrapper>
                        <S.Photo src={photo} alt='Maria' />
                    </S.RightSideWrapper>
                </FlexWrapper>
                <S.LinkDown href="#about-me">
                    <Icon iconId="scroll" width="32" height="32" viewBox='-7 -3 32 32' />
                </S.LinkDown>
                <S.StyledAboutMe>About Me</S.StyledAboutMe>
                <S.StyledShortInfo id='about-me'>
                    The long barrow was built on land previously inhabited in the Mesolithic period. It
                    consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet)
                    in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and
                    cremated human remains were placed within this chamber during the Neolithic period,
                    representing at least nine or ten individuals.
                </S.StyledShortInfo>
            </Container>
        </S.Main>
    );
};

