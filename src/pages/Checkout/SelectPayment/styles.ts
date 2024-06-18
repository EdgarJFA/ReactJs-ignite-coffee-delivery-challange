import styled from "styled-components"

interface selectProps {
    selected?: boolean
}

export const SelectPaymentContainer = styled.button<selectProps>`
    width: 100%;
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 160%;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    border: 2px solid transparent;
    border-radius: 6px;
    border-color: ${props => props.selected ? props.theme['purple'] : 'transparent'};
    color: ${props => props.theme['base-text']};
    padding: 1rem;

    cursor: pointer;
    box-shadow: none !important;

    background: ${props => props.selected ? props.theme['purple-light'] : props.theme['base-button']};

    &:hover {
        background: ${props => props.selected ? props.theme['purple-light'] :  props.theme['base-hover']};
    }

    svg {
        color: ${props => props.theme.purple};
    }
`