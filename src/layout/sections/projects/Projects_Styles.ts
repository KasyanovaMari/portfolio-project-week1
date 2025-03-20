import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const Projects = styled.section`
    position: relative;
    @media ${theme.media.mobile} {
        display: flex;
        align-items: center;
        min-width: 360px;
    }
`;

const SeeAllButton = styled.button`
    display: block;
    margin: 40px auto;
    background-color: ${theme.colors.accent};
    color: white;
    border-radius: 6px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    width: 300px;
    height: 50px;

    &:hover {
        background-color: ${theme.colors.buttonHover};
    }
`;

const Project = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.secondaryBg};
    max-width: 522px;
    min-height: fit-content;
    border-radius: 6px;
    box-shadow: 2px 2px 32px 0 rgba(40, 38, 44, 0.15);
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
`;

const Description = styled.div`
    padding: 20px 25px;
`;

const Title = styled.h3`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 15px;
    padding: 0;
    text-transform: uppercase;
`;

const Text = styled.p`
    color: ${theme.colors.font};
    text-align: left;
    margin: 0;
`;

export const S = {
    Projects,
    SeeAllButton,
    Project,
    Image,
    Description,
    Title,
    Text
};