import { ReactNode } from "react";
import { BgColorsProps, IconWrapper } from "./styles";

interface IconPillProps extends BgColorsProps {
    children: ReactNode
}

export function IconPill({ bgColor, children }: IconPillProps) {
    return(
        <IconWrapper bgColor={bgColor}>
            {children}
        </IconWrapper>
    )
}