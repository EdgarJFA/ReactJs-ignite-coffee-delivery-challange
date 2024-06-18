import styled from "styled-components"

const BG_COLORS = {
    yellow: 'yellow',
    ['yellow-dark']: 'yellow-dark',
    purlpe: 'purple',
    base: 'base-text'
} as const

export interface BgColorsProps {
    bgColor: keyof typeof BG_COLORS
}


export const IconWrapper = styled.div<BgColorsProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    background: ${props => props.theme[BG_COLORS[props.bgColor]]};
    color: ${props => props.theme.white};

    display: flex;
    justify-content: center;
    align-items: center;
`