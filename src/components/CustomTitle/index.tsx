import { BaseTitle, TitleProps } from "./styles";

interface CustomTitleProps extends TitleProps {
    title: string
}

export function CustomTitle({ fontSize, fontWeight, variant, title }: CustomTitleProps) {
    return (
        <BaseTitle fontSize={fontSize} fontWeight={fontWeight} variant={variant}>
            {title}
        </BaseTitle>
    )
}