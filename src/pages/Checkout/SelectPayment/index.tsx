import { ReactNode } from "react"
import { SelectPaymentContainer } from "./styles"

interface SelectPaymentProps {
    paymentMethod: {
        id: string
        title: string
        selected: boolean
        }
        onSelectPayment: (paymentTypeId: string) => void
        children?: ReactNode
}

export function SelectPayment({  children, paymentMethod: {id, selected, title}, onSelectPayment }: SelectPaymentProps) {
    return (
        <SelectPaymentContainer type="button" selected={selected} onClick={() => onSelectPayment(id)}>
            {children}
            {title}
        </SelectPaymentContainer>
    )
}