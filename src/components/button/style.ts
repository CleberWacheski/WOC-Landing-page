import styled, { css } from "styled-components";

interface ButtonStyledProps {
    buttonType: 'primary' | 'secondary' | 'default'
}

export const Button = styled.button<ButtonStyledProps>`
    padding: 13px 26px;
    border-radius: 10px;
    border: 1px black solid;
    transition: all 200ms ease-in;
    &:hover {
            opacity: 0.7;
        }

    ${({ buttonType }) => buttonType === 'primary' && css`
        background-color: black;
        color: white;

        
    `}
    ${({ buttonType }) => buttonType === 'secondary' && css`
        background-color: #1B1AFF;
        color: white;
        font-weight: bolder;
        font-size: 18px;
        border: 0;
    `}

`