import { useFormContext } from 'react-hook-form'
import { FormInputsContainer, TextInput } from "./styles";

export function FormInputs() {

    const { register } = useFormContext()
    return (
        <FormInputsContainer>
            <div id="CEP">
                
                <TextInput type="text" placeholder="CEP" {...register('cep', { valueAsNumber: true })} />
            </div>
            <TextInput type="text" placeholder="Rua" {...register('street')} />
            <div id="contact">
                <TextInput type="text" placeholder="Número" {...register('contact', { valueAsNumber: true })} />
                <TextInput type="text" placeholder="Complemento" {...register('additionalInfo')} />
            </div>
            <div id="address">
                <TextInput type="text" placeholder="Bairro" {...register('neighborhood')} />
                <div>
                    <TextInput type="text" placeholder="Cidade" {...register('city')} />
                    <TextInput type="text" placeholder="UF" {...register('state')} />
                </div>
            </div>
        </FormInputsContainer>
    )
}