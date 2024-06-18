import styled from "styled-components"

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 0.5rem;

    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['purple']};

    cursor: pointer;
`

export const CounterInput = styled.input`
    background: transparent;
    border: 0;
    text-align: center;
    width: 1.25rem;
    box-shadow: none !important;

    color: ${props => props.theme['base-title']};

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`