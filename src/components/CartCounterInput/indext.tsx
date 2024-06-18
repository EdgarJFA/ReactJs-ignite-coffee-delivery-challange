import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer, CounterInput } from "./styles";

interface CounterProps {
    amount: number
    onIncreaseAmount: () => void;
    onDecreaseAmount: () => void;
}

export function CartCounterInput({ amount, onDecreaseAmount, onIncreaseAmount }: CounterProps) {
    return (
        <CounterContainer>
            <Minus weight="bold" size={14} onClick={onDecreaseAmount} />
            <CounterInput type="number" max={99} min={1} value={amount} placeholder="1" disabled />
            <Plus weight="bold" size={14} onClick={onIncreaseAmount}/>
        </CounterContainer>
    )
} 