import styled from "styled-components"

export const BaseCatalog = styled.div`
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px 6px 36px;
`

export const CatalogContainer = styled(BaseCatalog)`
    width: calc(20% - 2.5rem);
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;

    padding: 7.5rem 1.25rem 1.25rem 1.25rem;
    gap: 1rem;

    img {
        width: 7.5rem;
        top: -1.25rem;
        position: absolute;
    }

    p {
        text-align: center;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 130%;

        color: ${props => props.theme['base-label']};
    }
`

export const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.25rem;
`

export const Tag = styled.span`
     background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;

    font: 700 0.625rem/130% 'Roboto', sans-serif;
`

export const CoffeeItemForm = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;



    span {
        display: flex;
        align-items: baseline;
        gap: 0.25rem;

        font-size: 0.875rem;
        line-height: 130%;
        font-weight: 400;
    }

    div {
        display: flex;
        gap: 0.5rem;
    }
`
export const Cart = styled.button`
    border: 0;
    border-radius: 6px;
    width: 2.375rem;
    background: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['white']};

    
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background: ${props => props.theme['purple']};
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`