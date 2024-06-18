import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const StoreInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 1rem;

    div#info {
        display: flex;
        flex-direction: column;
        gap: 4.125rem;
    }

`

export const SectionTitleAndSubtitle = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;
`

export const StoreInfoSubtitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;

    color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeSectionDescriptionList = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem 2.5rem;

    li {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        font: 400 1rem/130% 'Roboto', sans-serif;
        color: ${props => props.theme['base-text']}

    }
`

export const CoffeeSectionImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 29.75rem;
        height: 22.5rem;
    }
`

export const CoffeeContainer = styled.main`
    display: flex;
    flex-direction: column;

    gap: 2rem;
    padding: 2rem 0;
`
export const CoffeeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2.5rem;
`
