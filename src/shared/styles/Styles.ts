import { createTheme } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';

export const custom_theme = createTheme({
    palette: {
        primary: {
            light: '#efefef',
            main: '#fff',
            dark: '#8d8d8d',
            contrastText: '#000',
        },
        type: 'dark'
    },
});

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: #000; 
    }

    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        box-sizing: border-box;
        background-color: #26282f;
    }

    div {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }
`

export const ContentWrapper = styled.div`
    height: calc(100vh - 200px);
    width: 100%;
    position: fixed;
    display: flex;
`

export const InfoLabel = styled.div`
    color: #fff;
    width: 100%;
    text-align: center;
    margin-top: 1rem;
`