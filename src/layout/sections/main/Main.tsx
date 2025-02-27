import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <MainTitle>DEVELOPER</MainTitle>
                    <Name>Maria Kasyanova</Name>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                    <StyledContactMe>Contact me</StyledContactMe>
                </div>
                <Photo src={photo} alt='Maria'/>
            </FlexWrapper>
            <StyledAboutMe>About Me</StyledAboutMe>
            <StyledShortInfo>The long barrow was built on land previously inhabited in the Mesolithic period. It
                consisted of a
                sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber
                built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed
                within this chamber during the Neolithic period, representing at least nine or ten
                individuals.</StyledShortInfo>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #c9c7e5;
`

const Photo = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font-size: 35px;
    color: #656565;
    text-align: left;
`

const Name = styled.h2`
    text-align: left;
`

const StyledContactMe = styled.button`
`

// const StyledScroll = styled.button`
// `

const StyledAboutMe = styled.h3`

`

const StyledShortInfo = styled.p`
    max-width: 800px;
    text-align: left;
`