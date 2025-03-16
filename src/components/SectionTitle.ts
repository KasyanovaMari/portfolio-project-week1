import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

export const SectionTitle = styled.h2`
    ${font({weight: 600, color: theme.colors.headlineFont})};
    
    font-size: 24px;
    letter-spacing: 0.04em;
    margin-bottom: 20px;
`;
