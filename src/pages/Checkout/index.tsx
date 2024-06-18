import { useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";

import { CustomTitle } from "../../components/CustomTitle";
import { CartCounterInput } from "../../components/CartCounterInput/indext";
import { SelectPayment } from "./SelectPayment";
import { FormHeader } from "./FormHeader";
import { PaymentTypeProps, paymentTypeList } from "../../data/payments";
import { FormInputs } from "./FormInputs";
import { CoffeeProps, DeliveryOrderContext } from "../../contexts/DeliveryOrderContext";

import { BaseCard, BaseWrapperContainer, CartButtonWrapper, CartDetails, CartInput, CartStorngText, CheckoutCard, CkeckListCounter, CustomButton, PageWrapper, PaymentTypeList, Separator } from "./styles";

const newCoffeeFormValidationSchema = zod.object({
    cep: zod.number().min(4),
    street: zod.string().min(1),
    contact: zod.number(),
    additionalInfo: zod.string().min(3),
    neighborhood: zod.string().min(3),
    city: zod.string().min(3),
    state: zod.string().min(2).max(3)
})

type newCoffeeFormDataType = zod.infer<typeof newCoffeeFormValidationSchema>

export function Checkout() {
    const navigate = useNavigate()

    const [ paymentMethods, setPaymentMethods ] = useState<Array<PaymentTypeProps>>(paymentTypeList)
    const { checkout, createNewOrder, removeToCart, updateCoffeeAmountOnCart, selectedPaymentType, setNewSelectedPaymentType } = useContext(DeliveryOrderContext)

    const { coffees, deliveryFee, totalAmount, totalCoffeAmount } = checkout

    const newCoffeeForm = useForm<newCoffeeFormDataType>({
        resolver: zodResolver(newCoffeeFormValidationSchema)}
    )

    const { reset, handleSubmit } = newCoffeeForm

    const isSubmittedDisabled = !selectedPaymentType

    function handleChangePaymentMethod(selectedPaymentId: string) {
        setPaymentMethods((state) => state.map((paymentType) => {
            if(paymentType.id === selectedPaymentId) {
                const selectedPayment = {
                    ...paymentType,
                    selected: true
                }
                setNewSelectedPaymentType(selectedPayment)
                return selectedPayment
            } else {
                return { ...paymentType, selected: false }
            }
        }))
    }

    function FormatPrice(price: number) {
        return price.toFixed(2)
    }

    function handleRemoveCoffeeFromCart(coffeeId: string) {
        removeToCart(coffeeId)
    }

    function handleUpdateCoffeeAmount(coffee: CoffeeProps, newAmount: number) {
        if(newAmount > 0 && newAmount < 100) {
            const data = {
                ...coffee,
                amount: newAmount
            }
            updateCoffeeAmountOnCart(data)
            console.log(data)
            return data
        }
        return
        
    }

    function handleCreateNewCoffeeDeliveryOrder(order: newCoffeeFormDataType) {      
        createNewOrder(order)
        navigate('/confirmation')
        reset()
    }
    return (
        <PageWrapper onSubmit={handleSubmit(handleCreateNewCoffeeDeliveryOrder)} >
            <BaseWrapperContainer>
                <CustomTitle fontSize="1.125rem" fontWeight="700" variant="subtitle" title="Complete seu pedido"/>
                <BaseCard>
                    <FormHeader title="Endereço de Entrega" description="Informe o endereço onde deseja receber seu pedido" variant="yellow">
                        <MapPinLine size={22} />
                    </FormHeader>
                    <FormProvider {...newCoffeeForm} >
                        <FormInputs />
                    </FormProvider>
                </BaseCard>
                <BaseCard>
                    <FormHeader title="Pagamento" description="O pagamento é feito na entrega. Escolha a forma que deseja pagar">
                        <CurrencyDollar size={22} />
                    </FormHeader>
                    <PaymentTypeList>
                        { paymentMethods.map((payment) => {
                            return (
                                <SelectPayment key={payment.id} paymentMethod={payment} onSelectPayment={handleChangePaymentMethod}>
                                    {payment.icon === 'CreditCard' && <CreditCard size={17} />}
                                    {payment.icon === 'Bank' && <Bank size={17} />}
                                    {payment.icon === 'Money' && <Money size={17} />}
                                </SelectPayment>
                            )
                        })}
                    </PaymentTypeList>
                </BaseCard>
            </BaseWrapperContainer>
            <BaseWrapperContainer>
                <CustomTitle fontSize="1.125rem" fontWeight="700" variant="subtitle" title="Cafés selecionados" />
                <CheckoutCard>
                    <Separator>
                        { coffees.map((coffee) => {
                            return (
                                <CartInput key={coffee.id}>
                                    <CartDetails>
                                        <img src={coffee.image} alt="" />
                                        <div>
                                            <h3>{coffee.type}</h3>
                                            <CartButtonWrapper>
                                                <CartCounterInput amount={coffee.amount} onDecreaseAmount={() => handleUpdateCoffeeAmount(coffee, coffee.amount - 1)} onIncreaseAmount={() => handleUpdateCoffeeAmount(coffee, coffee.amount + 1)} />
                                                <CustomButton type="button" variant="secondary" size="medium" onClick={() => handleRemoveCoffeeFromCart(coffee.id)}>
                                                    <Trash size={16} />
                                                    Remover
                                                </CustomButton>
                                            </CartButtonWrapper>
                                        </div>
                                    </CartDetails>
                                    <CartStorngText textSize="medium">R$ {FormatPrice(coffee.price)}</CartStorngText>
                                </CartInput>
                            )
                        })}
                        <CkeckListCounter>
                            <div>
                                <span>Total de itens</span>
                                <span>R$ {FormatPrice(totalCoffeAmount)}</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>R$ {FormatPrice(deliveryFee)}</span>
                            </div>
                            <div>
                                <CartStorngText textSize="large">Total</CartStorngText>
                                <CartStorngText textSize="large">R$ {FormatPrice(totalAmount)}</CartStorngText>
                            </div>
                        </CkeckListCounter>
                    </Separator>
                    <CustomButton type="submit" variant="primary" size="large" disabled={isSubmittedDisabled} >
                        confirmar pedido
                    </CustomButton>
                </CheckoutCard>
            </BaseWrapperContainer>
        </PageWrapper>
    )
}