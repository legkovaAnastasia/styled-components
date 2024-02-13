import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {theme} from "./components/styles/Theme.styled";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href='news'>link</StyledBtn>
                <StyledBtn as='a' href='login'>link</StyledBtn>
                <StyledBtn color='lightblue' fontSize='2.5rem'>Hello</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperBtn>Goodbye</SuperBtn>
                <StyledBtn color={theme.colors.primary} btnType={'primary'} active>primary</StyledBtn>
                <StyledBtn color={theme.colors.secondary} btnType={'outlined'}  >outlined</StyledBtn>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }
;

    ${Link} {
        cursor: zoom-in;
    }

    @media ${theme.media.tablet} {
        flex-direction: column;

    }
`