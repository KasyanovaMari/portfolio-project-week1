import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";

const items = ["Home", "Projects", "Skills", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    background-color: #ffd9e8;
`
