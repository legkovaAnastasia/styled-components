import styled, {css} from "styled-components";
import {MyAnimation} from "./styles/animations/Animations";

type StyledBtnProps = {
    color?: string
    fontSize?: string
    btnType?: 'outlined' | 'primary'
    active?: boolean
}
export const StyledBtn = styled.button<StyledBtnProps>`
    border: none;
    background-color: #c42a8c;
    padding: 10px 20px;
    border-radius: 5px;
    color: #ddeeff;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;
    background-color: ${props => props.color || '#c42a8c'};

    &:hover {
        background-color: #0a5298;
    }

    ${props => props.btnType === 'primary' && css<StyledBtnProps>`
        border: 2px solid ${props => props.color || '#c42a8c'};
        color: ${props => props.color || '#c42a8c'};
        background-color: transparent;
    `}

    ${props => props.btnType === 'outlined' && css<StyledBtnProps>`
        background-color: ${props => props.color || '#c42a8c'};
        color: blanchedalmond;
    `}
    ${props => props.active && css<StyledBtnProps>`
        box-shadow: 5px 5px 5px 5px rgba(82, 89, 89, 0.74);
    `}

`
export const SuperBtn = styled(StyledBtn)`
    border-radius: 5px;
    padding: 20px 30px;
    background-color: #34bbc7;
    color: #525959;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
}
`