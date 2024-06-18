import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import { IconPill } from "../../components/IconPill";
import { CustomTitle } from "../../components/CustomTitle";
import { Catalog } from "./components/Catalog";
import { CoffeeProps, coffeeList } from "../../data/Coffees";
import coffeeImage from '../../assets/coffee-delivery.png'

import { 
    HomeContainer, 
    StoreInfo, 
    StoreInfoSubtitle, 
    SectionTitleAndSubtitle, 
    CoffeeSectionDescriptionList, 
    CoffeeSectionImage, 
    CoffeeContainer,  
    CoffeeList,
} from "./styles";
import { useContext } from "react";
import { DeliveryOrderContext } from "../../contexts/DeliveryOrderContext";

export function Home() {

    const { addToCart } = useContext(DeliveryOrderContext)

    function handleAddCoffeeToCart(coffee: CoffeeProps, amount: number) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { description, ingredients, ...rest } = coffee

        const data = { ...rest, amount }
        addToCart(data)
        
    }

    return (
        <HomeContainer>
            <StoreInfo>
                <div id="info">
                    <SectionTitleAndSubtitle>
                        <CustomTitle fontSize="3rem" fontWeight="800" variant="title" title="Encontre o café perfeito para qualquer hora do dia" />
                        <StoreInfoSubtitle>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </StoreInfoSubtitle>
                    </SectionTitleAndSubtitle>
                    <CoffeeSectionDescriptionList>
                        <li>
                            <IconPill bgColor="yellow-dark">
                                <ShoppingCart size={16} weight="fill" />
                            </IconPill>
                            <span>Compra simples e segura</span>
                        </li>
                        <li>
                            <IconPill bgColor="base">
                                <Package size={16} weight="fill" />
                            </IconPill>
                            <span>Embalagem mantém o café intacto</span>
                        </li>
                        <li>
                            <IconPill bgColor="yellow">
                                <Timer size={16} weight="fill" />
                            </IconPill>
                            <span>Entrega rápida e rastreada</span>
                        </li>
                        <li>
                            <IconPill bgColor="purlpe">
                                <Coffee size={16} weight="fill"  />
                            </IconPill>
                            <span>O café chega fresquinho até você</span>
                        </li>
                    </CoffeeSectionDescriptionList>
                </div>
                <CoffeeSectionImage>
                    <img src={coffeeImage} alt="" />
                </CoffeeSectionImage>
            </StoreInfo>
            <CoffeeContainer>
                <CustomTitle fontSize="2rem" fontWeight="800" variant="subtitle" title="Nossos cafés" />
                <CoffeeList>
                    { coffeeList.map(coffee => {
                        return <Catalog key={coffee.id}  coffee={coffee}  onClickCart={handleAddCoffeeToCart}/>
                    })}
                </CoffeeList>
            </CoffeeContainer>
        </HomeContainer>
    )
}