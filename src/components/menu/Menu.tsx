import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {MenuItemType} from "../../layout/header/Types.ts";

type MenuProps = {
    menuItems: Array<MenuItemType>;
};

export const Menu = (props: MenuProps) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    if (item.isButton) {
                        return (
                            <li key={index}>
                                <span className="button-style">
                                    <a href="">{item.title}</a>
                                </span>
                            </li>
                        );
                    } else {
                        return (
                            <li key={index}>
                                <a href="">{item.title}</a>
                            </li>
                        );
                    }
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    padding-top: 27px;

    ul {
        display: flex;
        gap: 87px;
        align-items: center;

        @media (max-width: 768px) {
            gap: 30px;
        }
    }

    .button-style {
        display: inline-block;
        background-color: ${theme.colors.accent};
        color: #FFFFFF;
        padding: 12px 20px 13px 20px;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
            background-color: #9a5a9f;
        }

        a {
            color: #FFFFFF;
        }
`;

