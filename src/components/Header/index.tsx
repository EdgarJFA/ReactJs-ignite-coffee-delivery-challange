import { NavLink } from "react-router-dom";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logoCoffee from '../../assets/logo-coffee.svg'
import { CartNotification, CustomLink, HeaderContainer } from "./styles";
import { useContext } from "react";
import { DeliveryOrderContext } from "../../contexts/DeliveryOrderContext";

export function Header() {
    const { checkout: { coffees } } = useContext(DeliveryOrderContext)
    const itemsInCart = coffees.length
    return(
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <nav>
                <NavLink to="/" title="home">
                    <CustomLink backgroundColor="purple-light" textColor="purple-dark" >

                        <MapPin weight="fill" size={22} />
                        <span>Porto Alegre, RS</span>
                    </CustomLink>
                </NavLink>
                <NavLink to="/checkout" title="checkout">
                <CustomLink backgroundColor="yellow-light" textColor="yellow-dark">
                    { itemsInCart > 0 && 
                        <CartNotification>
                            {itemsInCart}
                        </CartNotification>
                    }
                    <ShoppingCart weight="fill" size={22} />
                </CustomLink>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}