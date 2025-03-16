import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.ts";

const Contacts = styled.section`
`;

const Form = styled.form`
    max-width: 532px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`;

const Field = styled.input`
    width: 100%;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid ${theme.colors.accent};
    border-radius: 6px;
    color: ${theme.colors.font};
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    margin-top: 6px;
    margin-bottom: 25px;
    padding: 14px 0 14px 18px;
    font-size: 16px;

    &.name-input {
        font-size: 14px;
        padding: 15px 0 16px 18px;
    }

    &.message-input {
        height: 165px;
        resize: none;
        margin-bottom: 0;
    }

    &:focus-visible {
        outline: 2px solid ${theme.colors.accent};
    }
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: 400;
    font-size: 14px;

    &:last-of-type {
        margin-bottom: 22px;
    }
`;

const SendButton = styled(Button)`
    background-color: ${theme.colors.accent};
    border-radius: 6px;
    padding: 12px 20px;
    width: 100%;
    height: 48px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    color: #FFFFFF;

    &:hover {
        background-color: ${theme.colors.buttonHover};
    }
`;

export const S = {
    Contacts,
    Form,
    Field,
    Label,
    SendButton
}