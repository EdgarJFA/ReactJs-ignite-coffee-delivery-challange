import { CoffeeProps } from "../../contexts/DeliveryOrderContext";
import { ActionsTypes } from "./actions";

interface CoffeeStateProps {
    coffees: CoffeeProps[]
    totalCoffeAmount: number
    deliveryFee: number
    totalAmount: number
}

export function coffeesReducer(state: CoffeeStateProps, action: any) {
    switch(action.type) {
        case ActionsTypes.ADD_NEW_COFFEE: {
            let coffees = []
            if (state.coffees.map((coffee) => coffee.id).includes(action.payload.coffee.id)) {
                coffees = state.coffees.map((coffee) => {
                    if(coffee.id === action.payload.coffee.id) {
                        return {
                            ...coffee,
                            amount: action.payload.coffee.amount
                        }
                    } else {
                        return coffee
                    }
                })
            } else {
                coffees = [...state.coffees, action.payload.coffee]
            }

            
            const totalCoffeAmount = coffees.reduce((total, coffee) => total + (coffee.price * coffee.amount) , 0)
            const deliveryFee = coffees.length > 0 ? 3.50 : 0
            const totalAmount = totalCoffeAmount + deliveryFee
            
            return {
                deliveryFee,
                totalCoffeAmount,
                totalAmount,
                coffees,
            }
        }
        case ActionsTypes.REMOVE_COFFEE: {
            const coffees = state.coffees.filter((coffee) => coffee.id !== action.payload.coffeeId)
            const totalCoffeAmount = coffees.reduce((total, coffee) => total + (coffee.price * coffee.amount) , 0)
            const deliveryFee = coffees.length > 0 ? 3.50 : 0
            const totalAmount = totalCoffeAmount + deliveryFee

            return {
                deliveryFee,
                totalCoffeAmount,
                totalAmount,
                coffees,
            }
        }
        case ActionsTypes.UPDATE_COFFEE_AMOUNT: {
            const coffees = state.coffees.map((coffee) => {
                if(coffee.id === action.payload.coffee.id) {
                    return {
                        ...coffee,
                        amount: action.payload.coffee.amount
                    }
                } else {
                    return coffee
                }
            })
            const totalCoffeAmount = coffees.reduce((total, coffee) => total + (coffee.price * coffee.amount) , 0)
            const deliveryFee = coffees.length > 0 ? 3.50 : 0
            const totalAmount = totalCoffeAmount + deliveryFee

            return {
                deliveryFee,
                totalCoffeAmount,
                totalAmount,
                coffees,
            }
        }
        default: 
            return state
    }

}