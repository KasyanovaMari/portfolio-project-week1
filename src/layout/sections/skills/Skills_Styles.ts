import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.ts";

const Skills = styled.section`
    position: relative;
    ${FlexWrapper} {
        @media ${theme.media.mobile}, ${theme.media.tablet} {
            row-gap: 80px;
        }
    }
`;
const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 120px;

    @media ${theme.media.tablet} {
        max-width: 90px;
    }
`;

const IconWrapper = styled.div`
    svg {
        width: 120px;
        height: 120px;

        @media ${theme.media.mobile}, ${theme.media.tablet} {
            width: 90px;
            height: 90px;
        }
    }
`;

const SkillTitle = styled.h3`
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-top: 15px;
    padding: 0;
`;

export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle
};