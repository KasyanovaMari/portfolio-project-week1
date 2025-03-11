import styled from "styled-components";
import photo from '../../../assets/images/photo.webp';
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <LeftSideWrapper>
                        <MainTitle>Developer</MainTitle>
                        <Name>Maria Kasyanova</Name>
                        <LeftText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt.</LeftText>
                        <StyledButton>Contact me</StyledButton>
                    </LeftSideWrapper>
                    <RightSideWrapper>
                    <Photo src={photo} alt='Maria'/>
                        </RightSideWrapper>
                </FlexWrapper>
                <LinkDown href="#ancor">
                    <Icon iconId="scroll" width="32" height="32" viewBox='0 0 32 32'/>
                </LinkDown>
                <StyledAboutMe>About Me</StyledAboutMe>
                <StyledShortInfo>The long barrow was built on land previously inhabited in the Mesolithic period. It
                    consisted of a
                    sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                    chamber
                    built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed
                    within this chamber during the Neolithic period, representing at least nine or ten
                    individuals.
                </StyledShortInfo>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    margin-top: 140px;

    ${FlexWrapper} {
        @media ${theme.media.mobile} {
            width: 100%;
            flex-direction: column-reverse;
            gap: 62px;
            margin-top: 29px;
        }
`;

const LeftSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 60%;
    outline: 1px solid red;


    @media${theme.media.mobile}{
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

const RightSideWrapper= styled.div`
    display: flex;

`

const Photo = styled.img`
    max-width: 280px;
    height: auto;
    object-fit: cover;
`;

const MainTitle = styled.h1`
    ${font({family: "'Tinos regular', serif", weight: 400, Fmax: 20, Fmin: 16})}
    color: #151717;
    text-transform: uppercase;
`;

const Name = styled.h2`
    ${font({weight: 600, Fmax:72, Fmin:40})}
    color: ${theme.colors.accent};
    margin: 10px 0;
    white-space: nowrap;

`;

const LeftText = styled.p`
    max-width: 500px;
    text-align: left;
    
    @media${theme.media.mobile}{
        text-align: center;
    }
`

const StyledButton = styled.button`
    display: block;
    background-color: ${theme.colors.accent};
    color: white;
    border-radius: 6px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    width: 134px;
    height: 45px;
    margin-top: 29px;

    &:hover {
        background-color: #9a5a9f;
    }
`;

const LinkDown = styled.a`
    display: flex;
    justify-content: center;
    margin: 105px 0 140px 0;
    text-decoration: none;
`;

const StyledAboutMe = styled.h3`
`;

const StyledShortInfo = styled.p`
    position: relative;
    max-width: 843px;
    padding-left: 17px;
    font-size: 18px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 5px;
        background-color: ${theme.colors.accent};
        border-radius: 2px;

    }
`;
