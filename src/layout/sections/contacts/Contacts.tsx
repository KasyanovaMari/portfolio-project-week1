import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle.tsx";
import { Button } from "../../../components/Button.tsx";
import { Container } from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Label>
                        Name
                        <Field className="name-input" />
                    </Label>
                    <Label>
                        Email
                        <Field type={"email"} required className="email-input" />
                    </Label>
                    <Label>
                        Message
                        <Field as={'textarea'} className="message-input" />
                    </Label>
                    <SendButton type={'submit'}>Submit</SendButton>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`;

const StyledForm = styled.form`
    max-width: 532px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
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

    &.name-input {
        font-size: 14px;
        padding: 15px 0 16px 18px;

    }

    &.email-input {
        font-size: 16px;
        padding: 14px 0 14px 19px;
    }

    &.message-input {
        font-size: 16px;
        padding: 14px 0 14px 18px;
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
    width: 532px;
    height: 48px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    color: #FFFFFF;

    &:hover {
        background-color: #9a5a9f;
    }

`;