import styled from "styled-components";

type ProjectPropTypes = {
    title: string,
    text: string,
    src: string,
}


export const Project = (props: ProjectPropTypes) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </StyledProject>
    );
};


const StyledProject = styled.div`
    background-color: blanchedalmond;
    max-width: 522px;
    width: 100%;
    margin: 20px;

`

const Image = styled.img`
    width: 100%;
    height: 388px;
    object-fit: cover;
`
const Title = styled.h3`

`
const Text = styled.p`

`
