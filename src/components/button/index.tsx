import { ReactNode } from 'react'
import { Button as ButtonContainer } from './style'

interface ButtonProps {
    children: ReactNode
    buttonType: 'primary' | 'secondary' | 'default'
}

export function Button({ children, buttonType }: ButtonProps) {
    return (
        <ButtonContainer buttonType={buttonType} >
            {children}
        </ButtonContainer>
    )
}