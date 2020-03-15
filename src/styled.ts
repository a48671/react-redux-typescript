import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
        text-decoration: none;
        color: #333;
        :focus {
            outline: 0;
        }
    }
`;

export const Container = styled.div`
    display: block;
    width: 1017px;
    max-width: calc(100% - 20px);
    margin: 0 auto;
`;