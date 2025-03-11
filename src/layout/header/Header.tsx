import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.ts";
import {theme} from "../../styles/Theme.ts";


const leftItems = [{title: "Home", type: "link"}];
const rightItems = [
    {title: "Projects", type: "link"},
    {title: "Skills", type: "link"},
    {title: "Contact", type: "link", isButton: true},
];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Menu menuItems={leftItems}/>
                    <Menu menuItems={rightItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    height: 100px;

    ${FlexWrapper} {
        @media ${theme.media.mobile} {
            gap: 30px;
        }
    }
    
`