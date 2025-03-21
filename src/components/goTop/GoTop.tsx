import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {useEffect, useState} from "react";
import {theme} from "../../styles/Theme.ts";


export const GoTop = () => {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])
    return (
        <>
            {showBtn && (
            <StyledGoTopBtn onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <Icon iconId={'goUp'} height={'15'} width={'16'} viewBox={'7 6 16 15'}></Icon>
            </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: ${theme.colors.accent};
    padding: 8px;
    border-radius: 6px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`
