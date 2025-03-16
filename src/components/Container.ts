import styled from 'styled-components'
import {theme} from "../styles/Theme.ts";

export const Container = styled.div`
    max-width: 1170px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;

    @media ${theme.media.mobile} {
        padding: 0 25px;
    }

    @media ${theme.media.tablet} {
        padding: 0 25px;
    }
`