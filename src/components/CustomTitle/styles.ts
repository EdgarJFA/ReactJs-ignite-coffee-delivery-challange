import styled from "styled-components"

const TITLE_VARIANT = {
    title: 'base-title',
    subtitle: 'base-subtitle',
    text: 'base-text',
    label: 'base-label',
    hover: 'base-hover'
} as const

interface TextColorProps {
    variant: keyof typeof TITLE_VARIANT
}

export interface TitleProps extends TextColorProps {
    fontWeight: string
    fontSize: string,
}
export const BaseTitle = styled.h1<TitleProps>`
    font-family: 'Baloo 2', sans-serif;
    font-size: ${props => props.fontSize};
    line-height: 130%;
    font-weight: ${props => props.fontWeight};

    color: ${(props) => props.theme[TITLE_VARIANT[props.variant]]};
`