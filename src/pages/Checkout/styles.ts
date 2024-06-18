import styled from "styled-components"
import { BaseCatalog } from "../Home/components/Catalog/styles"

export const PageWrapper = styled.form`
    display: grid;
    grid-template-columns: 2fr 1fr;

    gap: 2rem;
    padding: 2.5rem 0;
`

export const BaseWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const BaseCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2.5rem;
    border-radius: 6px;

    background: ${props => props.theme['base-card']};

`

export const PaymentTypeList = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`

export const CheckoutCard = styled(BaseCatalog)`
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
export const Separator = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > *:not(:first-child)  {
        border-color: ${props => props.theme['base-button']};
        border-width: 1px 0 0 0;
        border-style: solid;
        padding: 1rem 0 0 0;
    } 
`

export const CartInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5rem 0.25rem;

    gap: 3.125rem;
`

export const CartDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.25rem;

    img {
        width: 4rem;
        height: 4rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        gap: 0.5rem;

        h3 {
            font-size: 1rem;
            line-height: 130%;
            font-weight: 400;
        }
    }
`

export const CartButtonWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
`

const BUTTON_VARIANTS = {
    primary: {
        default: 'yellow',
        hover: 'yellow-dark',
        text: 'white',
        icon: 'white'
    },
    secondary: {
        default: 'base-button',
        hover: 'base-hover',
        text: 'base-text',
        icon: 'purple'
    }
} as const

const BASE_BUTTON_SIZE = {
    medium: {
        padding: '0.5rem',
        size: '0.75rem',
        fontFamily: 'Roboto',
        fontWeight: '400'
    },
    large: {
        padding: '0.75rem',
        size: '0.875rem',
        fontFamily: 'Baloo 2',
        fontWeight: '700'
    }
} as const


interface BaseButtonProps {
    variant: 'primary' | 'secondary',
    size: 'large' | 'medium';
}

const BaseButton = styled.button<BaseButtonProps>`
    width: auto;
    border: 0;
    border-radius: 6px;
    padding: ${props => BASE_BUTTON_SIZE[props.size].padding};
    font-size: ${props => BASE_BUTTON_SIZE[props.size].size};
    font-family: ${props => BASE_BUTTON_SIZE[props.size].fontFamily}, sans-serif;
    font-weight: ${props => BASE_BUTTON_SIZE[props.size].fontWeight};

    background: ${props => props.theme[BUTTON_VARIANTS[props.variant].default]};
    color: ${props => props.theme[BUTTON_VARIANTS[props.variant].text]};
    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
        background: ${props => props.theme[BUTTON_VARIANTS[props.variant].hover]};
    }

    svg {
        color: ${props => props.theme[BUTTON_VARIANTS[props.variant].icon]};
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export const CustomButton = styled(BaseButton)`
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    text-transform: uppercase;
`

const TEXT_SIZE = {
    large: '1.25rem',
    medium: '1rem'
} as const

interface textSizeProps {
    textSize: keyof typeof TEXT_SIZE 
}

export const CartStorngText = styled.strong<textSizeProps>`
    font-family: 'Baloo 2', sans-serif;
    font-size: ${props => TEXT_SIZE[props.textSize]};
    font-weight: 700;
    line-height: 130%;
`

export const CkeckListCounter = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.75rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
