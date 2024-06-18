import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { coffeesReducer } from "../reducers/coffees/reducer";
import { addCoffeeToCartList, removeCoffeeFromCartList, updateCoffeeAmount } from "../reducers/coffees/actions";
import { ordersReducer } from "../reducers/orders/reducer";
import { createOrder } from "../reducers/orders/actions";


export interface OrderProps {
    cep: number;
    street: string;
    contact: number;
    additionalInfo: string;
    neighborhood: string;
    city: string;
    state: string;
}

interface PaymentTypeProps {
    id: string
    title: string
    icon: 'CreditCard' | 'Bank' | 'Money'
    selected: boolean
}

export interface CoffeeProps {
    id: string
    type: string
    price: number
    image: string
    amount: number
}

interface CheckoutProps {
    coffees: CoffeeProps[]
    totalCoffeAmount: number
    deliveryFee: number
    totalAmount: number
}

interface DeliveryOrderType {
    order: OrderProps
    checkout: CheckoutProps
    selectedPaymentType: PaymentTypeProps | null
    setNewSelectedPaymentType: (PaymentType: PaymentTypeProps) => void
    createNewOrder: (order: OrderProps) => void
    addToCart: (coffee: CoffeeProps) => void
    removeToCart: (coffeeId: string) => void
    updateCoffeeAmountOnCart: (coffee: CoffeeProps) => void
}

export const DeliveryOrderContext = createContext({} as DeliveryOrderType)

interface DeliveryOrderContextProviderProps {
    children: ReactNode
}

export function DeliveryOrderContextProvider({ children }: DeliveryOrderContextProviderProps ) {

    const [ coffeeState , dispatch ] = useReducer(coffeesReducer, 
        {
            coffees: [],
            totalCoffeAmount: 0,
            deliveryFee: 0,
            totalAmount: 0,
        },
        (initialState) => {
            const stateJSON = localStorage.getItem('@coffee-delivery:coffees-state')
            if(stateJSON) {
                return JSON.parse(stateJSON)
            }
            return initialState
        }
    )

    const [ orderState, orderDispatch ] = useReducer(ordersReducer, {})

    const checkout = coffeeState

    const order = orderState

    const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentTypeProps | null>(null)

    function setNewSelectedPaymentType(paymentType: PaymentTypeProps) {
        setSelectedPaymentType(paymentType)
    }

    function createNewOrder(order: OrderProps) {
        orderDispatch(createOrder(order))
    }

    function removeToCart(coffeeId: string) {
        dispatch(removeCoffeeFromCartList(coffeeId))
    }

    function addToCart(coffee: CoffeeProps) {
        dispatch(addCoffeeToCartList(coffee))
    }

    function updateCoffeeAmountOnCart(coffee: CoffeeProps) {
        dispatch(updateCoffeeAmount(coffee))
    }

    useEffect(() => {
        const stateJSON = JSON.stringify(coffeeState)
        localStorage.setItem('@coffee-delivery:coffees-state', stateJSON)
    }, [coffeeState])

    return (
        <DeliveryOrderContext.Provider 
            value={{
                order,
                checkout,
                createNewOrder,
                addToCart,
                removeToCart,
                updateCoffeeAmountOnCart,
                selectedPaymentType,
                setNewSelectedPaymentType
            }}
        >
            { children }
        </DeliveryOrderContext.Provider>
    )
}