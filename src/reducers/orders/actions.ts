import { OrderProps } from "../../contexts/DeliveryOrderContext";

export enum ActionsTypes {
    CREATE_ORDER = 'CREATE_ORDER'
}

export function createOrder(order: OrderProps) {
    return {
        type: ActionsTypes.CREATE_ORDER,
        payload: {
            order
        }
    }
}