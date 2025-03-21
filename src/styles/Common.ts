import {theme} from "./Theme.ts";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?:number
    Fmax?:number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}:FontPropsType) => `
font-family: ${family || "Montserrat"};
font-weight: ${weight || 400};
color: ${color || theme.colors.font};
line-height:${lineHeight || 1.5};
font-size: calc( (100vw - 414px)/(1449 - 414) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`