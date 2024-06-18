import styled from "styled-components"

const VARIANT_COLOR = {
    purple: 'purple',
    yellow: 'yellow-dark'
} as const

export type variantColors = keyof typeof VARIANT_COLOR

export interface IconColorProps {
    variant: variantColors
}

export const FormHeaderContainer = styled.header<IconColorProps>`
    display: flex;
    align-items: flex-start;

    gap: 0.5rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.123rem;

        span {
            color: ${props => props.theme['base-subtitle']};
            line-height: 130%;
        }

        p {
            font-size: 0.875rem;
            line-height: 130%;
        }
    }
    
    svg {
        color: ${props => props.theme[VARIANT_COLOR[props.variant]]}
    }
`