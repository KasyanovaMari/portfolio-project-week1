import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

const UsedSkillsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 11px 0 19px 0;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        margin: 8px 0 16px 0;
    }
`;

const SkillTablet = styled.span`
    border: 1px solid ${theme.colors.accent};
    padding: 6px 16px;
    border-radius: 4px;
    font-size: 12px;
    text-transform: uppercase;
`;

export const S = {
	UsedSkillsDiv,
	SkillTablet,
};