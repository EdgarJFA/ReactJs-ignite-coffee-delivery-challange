import { OrderProps } from "../../contexts/DeliveryOrderContext";
import { ActionsTypes } from "./actions";

export function ordersReducer(state: OrderProps, action: any) {
    switch(action.type) {
        case ActionsTypes.CREATE_ORDER: {
            return action.payload.order
        }
        default: return state
    }
}