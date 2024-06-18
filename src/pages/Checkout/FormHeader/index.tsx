import { ReactNode } from "react"
import { FormHeaderContainer, variantColors } from "./styles"

interface FormHeaderProps {
    title: string
    description: string
    variant?: variantColors
    children?: ReactNode 
}

export function FormHeader({ title, description, variant = 'purple', children }: FormHeaderProps) {
    return (
        <FormHeaderContainer variant={variant}>
            {children}
            <div>
                <span>{title}</span>
                <p>{description}</p>
            </div>
        </FormHeaderContainer>
    )
}