import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";
import {Link} from "react-scroll";

const Main = styled.div`
    margin-top: 140px;
    position: relative;

    ${FlexWrapper} {
        @media ${theme.media.mobile}, ${theme.media.tablet} {
            width: 100%;
            flex-direction: column-reverse;
            gap: 62px;
            margin-bottom: 70px;
            align-items: center;
        }
    }
`;

const LeftSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 60%;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        align-items: center;
        text-align: center;
    }
`;

const RightSideWrapper = styled.div`
    display: flex;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        justify-content: center;
    }
`;

const Photo = styled.img`
    max-width: 280px;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid ${theme.colors.accent};
`;

const MainTitle = styled.span`
    ${font({family: "'Tinos regular', serif", weight: 400, Fmax: 20, Fmin: 16})}
    color: #151717;
    text-transform: uppercase;

    p {
        display: none;
    }
`;

const Name = styled.h2`
    ${font({weight: 600, Fmax: 72, Fmin: 40})}
    color: ${theme.colors.accent};
    margin: 10px 0;
    white-space: nowrap;
`;

const LeftText = styled.p`
    max-width: 500px;
    text-align: left;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        text-align: center;
    }
`;

const StyledLink = styled(Link)`
    display: block;
    background-color: ${theme.colors.accent};
    color: white;
    border-radius: 6px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    width: 134px;
    height: 45px;
    padding-top: 13px;
    margin-top: 29px;

    &:hover {
        background-color: ${theme.colors.buttonHover};
        color: white;
    }

    &:visited {
        color: white;
    }
`;
const AboutMeTitle = styled.h3`
    padding: 0 0 0 15px;
    margin-bottom: 20px;
`;

const ShortInfo = styled.p`
    position: relative;
    max-width: 850px;
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

export const S = {
    Main,
    LeftSideWrapper,
    RightSideWrapper,
    Photo,
    MainTitle,
    Name,
    LeftText,
    StyledLink,
    AboutMeTitle,
    ShortInfo
};