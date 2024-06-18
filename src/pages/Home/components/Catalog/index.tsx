import { useState } from "react";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeeProps } from "../../../../data/Coffees";

import { CustomTitle } from "../../../../components/CustomTitle";
import { CartCounterInput } from "../../../../components/CartCounterInput/indext";

import { Cart, CatalogContainer, CoffeeItemForm, Tag, TagWrapper } from "./styles";

interface CatalogProps {
    coffee: CoffeeProps
    onClickCart: (coffee: CoffeeProps, amount: number) => void
}

export function Catalog({ coffee, onClickCart }: CatalogProps) {

    const { image, description, ingredients, type, price } = coffee
    const [amount, setAmount] = useState(0)

    function handleIncreaseAmount() {
        if (amount < 99)
            setAmount(state => state + 1)
    }
    function handleDecreaseAmount() {
        if (amount > 1)
            setAmount(state => state - 1)
    }

    function handleClickOnCartButton() {
        onClickCart(coffee, amount)
    }
    return (
        <CatalogContainer>
            <img src={image} alt="" />
            <TagWrapper>
                {ingredients.map((ingredient) => {
                    return (
                        <Tag key={ingredient}>
                            {ingredient}
                        </Tag>
                    )
                })}
            </TagWrapper>
            <CustomTitle fontSize="1.25rem" fontWeight="700" variant="subtitle" title={type} />
            <p>{description}</p>
            <CoffeeItemForm>
                <span>R$
                    <CustomTitle fontSize="1.5rem" fontWeight="800" variant="text" title={price.toString()} />
                </span>
                <div>
                    <CartCounterInput amount={amount} onDecreaseAmount={handleDecreaseAmount} onIncreaseAmount={handleIncreaseAmount}/>
                    <Cart onClick={handleClickOnCartButton} disabled={amount < 1}>
                        <ShoppingCartSimple size={22} />
                    </Cart>
                </div>
            </CoffeeItemForm>
        </CatalogContainer>
    )
}