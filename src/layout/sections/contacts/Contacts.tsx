import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Label>
                    Name
                    <Field placeholder={'name'}/>
                </Label>
                <Label>
                    Email
                    <Field placeholder={'email'} type={"email"} required/>
                </Label>
                <Label>
                    Message
                    <Field placeholder={'message'} as={'textarea'}/>
                </Label>
                <Button type={'submit'}>Submit</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin: 0 auto;
`

const Field = styled.input`

`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 14px;
`