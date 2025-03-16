import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contants_Styles.ts";
import * as React from "react";

export const Contact: React.FC = () => {
    return (
        <S.Contacts id="contact-form">
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.Form>
                    <S.Label>
                        Name
                        <S.Field className="name-input"/>
                    </S.Label>
                    <S.Label>
                        Email
                        <S.Field type={"email"} required className="email-input"/>
                    </S.Label>
                    <S.Label>
                        Message
                        <S.Field as={'textarea'} className="message-input"/>
                    </S.Label>
                    <S.SendButton type={'submit'}>Submit</S.SendButton>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

