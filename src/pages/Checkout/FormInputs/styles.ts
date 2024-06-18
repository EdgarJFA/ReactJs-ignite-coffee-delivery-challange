import styled from "styled-components"

export const FormInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div#CEP {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
    }

    div#contact {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 0.75rem;
    }

    div#address {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 0.75rem;

        div {
            display: grid;
            grid-template-columns: 1fr 3.75rem;
            gap: 0.75rem;
        }
    }

    /* label {
        display: flex;
        position: relative;
        

        &:not(:required):not(:focus)::before {
            content: 'Opcional';
            position: absolute;
            top: 1rem;
            right: 0.75rem;
            font-style: italic;
            font-size: 0.75rem;
            color: ${props => props.theme['base-text']};
            z-index: 9999;
        }
    } */
`

export const TextInput = styled.input`
    width: 100%;
    border: 2px solid ${props => props.theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;

    color: ${props => props.theme['base-text']};
    background: ${props => props.theme['base-input']};
`