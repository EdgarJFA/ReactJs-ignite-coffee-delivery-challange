import styled from "styled-components"

export const DeliveredContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 6.375rem;
    padding: 5rem 0;
`

export const OrderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2.5rem;
`

export const OrderInfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h1 {
        color: ${props => props.theme['yellow-dark']};
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        line-height: 130%;
        font-weight: 800;
    }

    p {
        font-size: 1.25rem;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};
    }
`

export const OrderInfoCard = styled.div`
    max-width: 32rem;
    border: 1px solid transparent;
    border-radius: 6px 36px 6px 36px;
    background: linear-gradient(white, white) padding-box, linear-gradient(to right, ${props => props.theme['yellow']}, ${props => props.theme['purple']}) border-box;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;

    gap: 2rem;

    > div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`

export const DeliveredImageContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const OrderInfoCardDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    line-height: 130%;

    strong {
        font-weight: 700;
    }

`