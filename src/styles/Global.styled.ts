import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Montserrat", sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: unset;
    }

    section {
        background-color: ${theme.colors.primaryBg};
        padding: 140px 0;
    }

    h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 1.08333;
        letter-spacing: 0.04em;
        color: ${theme.colors.font};
        padding-bottom: 20px;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.04em;
        color: ${theme.colors.font};
    }
`