import { CoffeeProps } from "../../contexts/DeliveryOrderContext";

export enum ActionsTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE',
    UPDATE_COFFEE_AMOUNT = 'UPDATE_COFFEE_AMOUNT'
}

export function addCoffeeToCartList(coffee: CoffeeProps) {
    return {
        type: ActionsTypes.ADD_NEW_COFFEE,
        payload: {
            coffee
        }
    }
}

export function removeCoffeeFromCartList(coffeeId: string) {
    return {
        type: ActionsTypes.REMOVE_COFFEE,
        payload: {
            coffeeId
        }
    }
}

export function updateCoffeeAmount(coffee: CoffeeProps) {
    return {
        type: ActionsTypes.UPDATE_COFFEE_AMOUNT,
        payload: {
            coffee
        }
    }
}