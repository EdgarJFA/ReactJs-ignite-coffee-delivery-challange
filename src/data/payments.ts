import {v4 as uuidv4} from 'uuid'

export interface PaymentTypeProps {
    id: string
    title: string
    icon: 'CreditCard' | 'Bank' | 'Money'
    selected: boolean
}

export const paymentTypeList = [
    {
        id: uuidv4(),
        title: 'Cartão de crédito',
        icon: 'CreditCard',
        selected: false
    },
    {
        id: uuidv4(),
        title: 'cartão de débito',
        icon: 'Bank',
        selected: false
    },
    {
        id: uuidv4(),
        title: 'dinheiro',
        icon: 'Money',
        selected: false
    },
] as PaymentTypeProps[]