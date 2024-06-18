import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 2rem 0;

    nav {
        display: flex;
        align-items: center;

        gap: 0.75rem;

        a {
            text-decoration: none;
        }
    }
`

const CUSTOM_NAV_COLORS = {
    ['yellow-dark']: 'yellow-dark',
    ['yellow-light']: 'yellow-light',
    ['purple-dark']: 'purple-dark',
     ['purple-light']: 'purple-light'
} as const

interface CustomNavProps {
    backgroundColor: keyof typeof CUSTOM_NAV_COLORS
    textColor: keyof typeof CUSTOM_NAV_COLORS
} 

export const CustomLink = styled.div<CustomNavProps>`
    
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 0.5rem;
    position: relative;

    gap: 0.25rem;

    background: ${(props) => props.theme[CUSTOM_NAV_COLORS[props.backgroundColor]]};
    color: ${(props) => props.theme[CUSTOM_NAV_COLORS[props.textColor]]};

    span {
        font-size: 0.875rem;
        line-height: 1.3rem;
        font-weight: 400;
    }
`
export const CartNotification = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;

    border-radius: 9999px;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-family: 'Baloo 2', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 700;
`