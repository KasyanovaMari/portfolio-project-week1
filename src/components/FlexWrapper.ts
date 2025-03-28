import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    marginBottom?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    margin-bottom: ${props => props.marginBottom || '0'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'};
    height: 100%;
    align-items: ${props => props.align || 'flex-start'};

`;