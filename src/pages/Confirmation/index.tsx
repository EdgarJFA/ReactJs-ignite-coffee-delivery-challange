import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import deliveredImg from '../../assets/motoboy-Illustration.png'
import { IconPill } from '../../components/IconPill';

import { DeliveredContainer, DeliveredImageContainer, OrderInfoCard, OrderInfoCardDetails, OrderInfoContainer, OrderInfoHeader } from "./styles";
import { useContext } from 'react';
import { DeliveryOrderContext } from '../../contexts/DeliveryOrderContext';

export function Confirmation() {
    const { selectedPaymentType, order } = useContext(DeliveryOrderContext)
    return (
        <DeliveredContainer>
            <OrderInfoContainer>
                <OrderInfoHeader>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </OrderInfoHeader>
                <OrderInfoCard>
                    <div>
                        <IconPill bgColor='purlpe'>
                            <MapPin size={16} weight='fill' />
                        </IconPill>
                        <OrderInfoCardDetails>
                            <p>Entrega em {order.street}</p>
                            <p>{order.neighborhood ?? 'n/a'} - {order.city ?? 'n/a'}, {order.state}</p>
                        </OrderInfoCardDetails>
                        
                    </div>
                    <div>
                        <IconPill bgColor='yellow'>
                            <Timer size={16} weight='fill' />
                        </IconPill>
                        <OrderInfoCardDetails>
                            <p>Previsão de entrega</p>
                            <strong>20 min - 30 min </strong>
                        </OrderInfoCardDetails>
                    </div>
                    <div>
                        <IconPill bgColor='yellow-dark'>
                            <CurrencyDollar size={16} weight='regular' />
                        </IconPill>
                        <OrderInfoCardDetails>
                            <p>Pagamento na entrega</p>
                            <strong>{selectedPaymentType?.title ?? 'n/a'}</strong>
                        </OrderInfoCardDetails>
                    </div>
                </OrderInfoCard>
            </OrderInfoContainer>
            <DeliveredImageContainer>
                <img src={deliveredImg} alt="" />
            </DeliveredImageContainer>
        </DeliveredContainer>
    )
}